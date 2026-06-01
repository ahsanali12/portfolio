"use client";

import { useEffect } from "react";

export function LegacyMain({ html }) {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-up");

    // Immediately activate elements already visible in the viewport
    // (prevents blank flash on navigation / back button)
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("active");
      }
    });

    // Observe remaining elements for scroll-triggered reveals
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    reveals.forEach((el) => {
      if (!el.classList.contains("active")) {
        revealObserver.observe(el);
      }
    });

    // Handle horizontal scroll with wheel support
    const scrollContainer = document.getElementById("case-studies-scroll");
    let wheelCleanup;
    if (scrollContainer) {
      const handleWheel = (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      };
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
      wheelCleanup = () => scrollContainer.removeEventListener("wheel", handleWheel);
    }

    return () => {
      revealObserver.disconnect();
      if (wheelCleanup) wheelCleanup();
    };
  }, [html]);

  return (
    <div className="relative z-10 bg-gradient-mesh">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

