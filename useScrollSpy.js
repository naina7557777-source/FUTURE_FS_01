import { useEffect, useState } from 'react';

/** Returns the id of the section currently crossing the middle of the viewport. */
export default function useScrollSpy(ids, rootMargin = '-45% 0px -50% 0px') {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin },
    );

    key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [key, rootMargin]);

  return active;
}
