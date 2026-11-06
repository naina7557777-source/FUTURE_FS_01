export default function SectionHeading({ id, title, children }) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-3 text-base leading-relaxed text-mist/65">{children}</p>}
    </div>
  );
}
