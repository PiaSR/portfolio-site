import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ children, className, reappear = false }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true); 
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
className={`${className} ${hasAnimated ? 'animate-onscroll-visible' : 'animate-onscroll-hidden'}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
