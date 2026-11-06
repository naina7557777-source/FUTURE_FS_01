// Inline SVG icons: no icon library needed, and each one inherits the current text colour.

function Svg({ children, filled = false, className = '', ...rest }) {
  // यहाँ हमने पक्का किया है कि कोई भी बाहर से क्लास भेजे, आइकॉन अधिकतम h-6 w-6 (24px) से बड़ा न हो पाए
  const finalClassName = className.includes('h-') 
    ? className 
    : `h-5 w-5 ${className}`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`${finalClassName} inline-block select-none`}
      style={{ maxWidth: '24px', maxHeight: '24px' }} // यह ज़बरदस्ती आइकॉन्स को बड़ा होने से रोकेगा
      {...rest}
    >
      {children}
    </svg>
  );
}

export const GithubIcon = (p) => (
  <Svg filled className="h-5 w-5" {...p}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </Svg>
);

export const LinkedinIcon = (p) => (
  <Svg filled className="h-5 w-5" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </Svg>
);

export const ExternalLinkIcon = (p) => (
  <Svg className="h-4 w-4" {...p}>
    <path d="M14 4h6v6" />
    <path d="M20 4l-9 9" />
    <path d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4" />
  </Svg>
);

export const DownloadIcon = (p) => (
  <Svg className="h-5 w-5" {...p}>
    <path d="M12 3v12" />
    <path d="M7 11l5 5 5-5" />
    <path d="M5 20h14" />
  </Svg>
);

export const MenuIcon = (p) => (
  <Svg className="h-6 w-6" {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (p) => (
  <Svg className="h-6 w-6" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const MailIcon = (p) => (
  <Svg className="h-5 w-5" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Svg>
);

export const SendIcon = (p) => (
  <Svg className="h-5 w-5" {...p}>
    <path d="M21 3L10 14" />
    <path d="M21 3l-7 18-4-7-7-4 18-7z" />
  </Svg>
);

export const CheckIcon = (p) => (
  <Svg className="h-5 w-5" {...p}>
    <path d="M5 12l5 5L20 7" />
  </Svg>
);

export const AlertIcon = (p) => (
  <Svg className="h-5 w-5" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5M12 16.5v.01" />
  </Svg>
);

export const SpinnerIcon = ({ className = 'h-5 w-5', ...p }) => (
  <Svg className={`${className} animate-spin`} {...p}>
    <circle cx="12" cy="12" r="9" opacity="0.25" />
    <path d="M21 12a9 9 0 00-9-9" />
  </Svg>
);
