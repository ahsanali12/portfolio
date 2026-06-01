document.addEventListener("DOMContentLoaded", () => {
  // Scroll Reveal System
  const reveals = document.querySelectorAll(".reveal-up");
  if (reveals.length > 0) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach((el) => revealObserver.observe(el));
  }

  // Particle Data Stream System
  const container = document.getElementById("stream-container");
  if (container) {
    const streamCount = 20; // Compromise between 15 and 25

    function createStream() {
      const stream = document.createElement("div");
      stream.className = "data-stream";
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 4 + Math.random() * 6;
      stream.style.left = `${left}%`;
      stream.style.animation = `stream-move ${duration}s linear ${delay}s infinite`;
      container.appendChild(stream);
    }

    for (let i = 0; i < streamCount; i++) {
      createStream();
    }
  }

  // Mouse Tracking Glow and Parallax
  const cursorGlow = document.getElementById("cursor-glow");
  const orb1 = document.getElementById("orb-1");
  const orb2 = document.getElementById("orb-2");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  if (cursorGlow || orb1 || orb2) {
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorGlow) {
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
        cursorGlow.style.opacity = "1";
      }
    });

    document.addEventListener("mouseleave", () => {
      if (cursorGlow) cursorGlow.style.opacity = "0";
    });

    function updateParallax() {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      const moveX = (currentX / window.innerWidth - 0.5) * 45; // Compromise
      const moveY = (currentY / window.innerHeight - 0.5) * 45;

      if (orb1) orb1.style.transform = `translate(${moveX}px, ${moveY}px)`;
      if (orb2)
        orb2.style.transform = `translate(${-moveX * 0.8}px, ${-moveY * 0.8}px)`;

      requestAnimationFrame(updateParallax);
    }

    updateParallax();
  }

  // Horizontal scroll with wheel support
  const scrollContainer = document.getElementById("case-studies-scroll");
  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }
});
