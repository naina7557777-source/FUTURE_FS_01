import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/portfolio';
import { AlertIcon, CheckIcon, GithubIcon, LinkedinIcon, MailIcon, SendIcon, SpinnerIcon } from './Icons';
import SectionHeading from './SectionHeading';

// Keys come from .env (see .env.example). They are exposed to the browser by design:
// EmailJS public keys are meant to be public, so protect the account in the EmailJS dashboard (see README).
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const COOLDOWN_MS = 30_000; // minimum gap between two sends from one browser tab
const MIN_FILL_MS = 2_500; // a human cannot complete the form faster than this
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { name: '', email: '', subject: '', message: '', company: '' }; // "company" is the honeypot

function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = 'Enter your name.';
  else if (name.length < 2) errors.name = 'Your name needs at least 2 characters.';

  if (!email) errors.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email, like name@example.com.';

  if (!subject) errors.subject = 'Add a short subject.';
  else if (subject.length < 3) errors.subject = 'The subject needs at least 3 characters.';

  if (!message) errors.message = 'Write a message.';
  else if (message.length < 10) errors.message = 'Write at least 10 characters so I know how to help.';

  return errors;
}

function Field({ label, name, error, as: Tag = 'input', children, ...props }) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        className="field"
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
      {children}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const openedAt = useRef(Date.now());
  const lastSentAt = useRef(0);

  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
    if (status !== 'sending') setStatus('idle');
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const finishSuccess = () => {
    setStatus('success');
    setFeedback('Message sent. I’ll reply within a couple of days.');
    setValues(EMPTY);
    setTouched({});
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    // Spam guards: a filled honeypot or an instant submit looks like a bot. Pretend it worked.
    if (values.company || Date.now() - openedAt.current < MIN_FILL_MS) {
      finishSuccess();
      return;
    }

    const wait = COOLDOWN_MS - (Date.now() - lastSentAt.current);
    if (wait > 0) {
      setStatus('error');
      setFeedback(`Please wait ${Math.ceil(wait / 1000)} seconds before sending another message.`);
      return;
    }

    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      setStatus('error');
      setFeedback('The form is not configured yet. Add your EmailJS keys to the .env file and restart the dev server.');
      return;
    }

    setStatus('sending');
    setFeedback('');
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        },
        { publicKey: EMAILJS.publicKey },
      );
      lastSentAt.current = Date.now();
      finishSuccess();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setFeedback(`Your message didn’t send. Try again, or email me directly at ${profile.email}.`);
    }
  };

  const sending = status === 'sending';

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading id="contact-title" title="Let’s build something together">
            Have an internship, a project or a question? Send a message and I’ll get back to you.
          </SectionHeading>

          <ul className="mt-8 space-y-3">
            {[
              { href: profile.emailHref, label: profile.email, Icon: MailIcon, external: true },
              { href: profile.github, label: 'GitHub', Icon: GithubIcon, external: true },
              { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedinIcon, external: true },
            ].map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass flex items-center gap-4 rounded-2xl px-5 py-4 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Icon className="h-5 w-5 text-apricot" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
          className="glass space-y-5 rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              autoComplete="name"
              maxLength={60}
              placeholder="Your full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={120}
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
            />
          </div>

          <Field
            label="Subject"
            name="subject"
            maxLength={100}
            placeholder="What is this about?"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.subject}
          />

          <Field
            label="Message"
            name="message"
            as="textarea"
            rows={6}
            maxLength={1000}
            placeholder="Tell me about the role or project."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
          >
            <p className="mt-2 text-right text-xs text-mist/50" aria-hidden="true">
              {values.message.length}/1000
            </p>
          </Field>

          {/* Honeypot: hidden from people and assistive tech, bots tend to fill it in */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.company}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="submit" disabled={sending} className="btn btn-primary w-full sm:w-auto">
              {sending ? <SpinnerIcon className="h-4 w-4" /> : <SendIcon className="h-4 w-4" />}
              {sending ? 'Sending…' : 'Send message'}
            </button>

            <div aria-live="polite" className="min-h-6 text-sm">
              {status === 'success' && (
                <p className="flex items-center gap-2 text-lagoon">
                  <CheckIcon className="h-4 w-4 shrink-0" />
                  {feedback}
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-red-300">
                  <AlertIcon className="h-4 w-4 shrink-0" />
                  {feedback}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
