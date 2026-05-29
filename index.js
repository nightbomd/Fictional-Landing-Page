const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const el = entry.target;

    if (entry.isIntersecting) {
      el.animate(
        [
          { opacity: 0, transform: "translateY(50px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 800,
          easing: "ease-out",
          fill: "forwards"
        }
      );
    } else {
      el.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(50px)" }
        ],
        {
          duration: 800,
          easing: "ease-in",
          fill: "forwards"
        }
      );
    }
  });
});

document.querySelectorAll(".fade-in-up").forEach((el) => {
  observer.observe(el);
});