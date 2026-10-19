"use client";

import { useLayoutEffect, useRef, useState, type ElementType, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & { as?: ElementType; children?: ReactNode };

// Content is visible by default (no JS, crawlers). Once the page has JS, anything below the fold
// fades in as it scrolls into view; anything already on screen is marked visible before first paint.
export default function Reveal({ as = "div", className = "", children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const Component = as as ElementType;

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    if (typeof IntersectionObserver === "undefined" || (bounds.top < window.innerHeight && bounds.bottom > 0)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "30px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`${className} reveal${visible ? " is-visible" : ""}`.trim()} {...rest}>
      {children}
    </Component>
  );
}
