"use client";

import { useEffect } from "react";

export function VisualEffects() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-up");
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

    reveals.forEach((el) => revealObserver.observe(el));

    const containers = document.querySelectorAll("#stream-container");
    containers.forEach((container) => {
      if (container.children.length) return;
      for (let i = 0; i < 20; i += 1) {
        const stream = document.createElement("div");
        stream.className = "data-stream";
        stream.style.left = `${Math.random() * 100}%`;
        stream.style.animation = `stream-move ${4 + Math.random() * 6}s linear ${Math.random() * 8}s infinite`;
        container.appendChild(stream);
      }
    });

    const cursorGlow = document.getElementById("cursor-glow");
    const orb1 = document.getElementById("orb-1");
    const orb2 = document.getElementById("orb-2");
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const mouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorGlow) {
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
        cursorGlow.style.opacity = "1";
      }
    };

    const mouseLeave = () => {
      if (cursorGlow) cursorGlow.style.opacity = "0";
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", mouseLeave);

    let raf;
    const updateParallax = () => {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;
      const moveX = (currentX / window.innerWidth - 0.5) * 45;
      const moveY = (currentY / window.innerHeight - 0.5) * 45;
      if (orb1) orb1.style.transform = `translate(${moveX}px, ${moveY}px)`;
      if (orb2) orb2.style.transform = `translate(${-moveX * 0.8}px, ${-moveY * 0.8}px)`;
      raf = requestAnimationFrame(updateParallax);
    };
    raf = requestAnimationFrame(updateParallax);

    return () => {
      revealObserver.disconnect();
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", mouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="mouse-glow" id="cursor-glow" />;
}

