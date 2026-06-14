
const navbar = document.getElementById("navbar");

function handleScroll(nav) {
window.addEventListener("scroll", () => {
  if (nav.classList.contains("transparent")) {

    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});
}
handleScroll(navbar)


const animations = {
  fadeUp: {
    duration: 500,
    in: [
      { opacity: 0, transform: "translateY(40px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    out: [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(40px)" }
    ]
  },

  scale: {
    duration: 500,
    in: [
      { opacity: 0, transform: "scale(0)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    out: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(0)" }
    ]
  },

  expand: {
    duration: 500,
    in: [
      { width: "75%", borderRadius: "16px", margin: "200px auto", padding: "48px" },
      { width: "100%", borderRadius: "0px", margin: "0 auto", padding: "48px" }
    ],
  }
};


const observer = new IntersectionObserver((entries) => {
  
  entries.forEach((entry) => {
    const el = entry.target;

    if (entry.isIntersecting) {
      const animationType = el.dataset.animation;
      const animation = animations[animationType];

      el.animate(animation.in, {
        duration: animation.duration,
        easing: "ease-out",
        fill: "forwards",
      });

      observer.unobserve(el);
    }
  });
}, { rootMargin: "0px 0px -20% 0px" });

document.querySelectorAll(".observe").forEach((el) => {
  observer.observe(el);
});

window.addEventListener("load", () => {
  const track = document.getElementById("track-left");
  if (track) {
    track.innerHTML += track.innerHTML;

    const originalWidth = track.scrollWidth / 2.2;
    track.style.setProperty("--scroll-distance", `-${originalWidth}px`);
    
  track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
  });

  track.addEventListener("mouseout", () => {
    track.style.animationPlayState = "running";
  });
  }



});
