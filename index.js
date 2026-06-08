
const sunflower = document.getElementById("sunflower");
let x = 0, y = 0;
let targetX = 0, targetYx = 0;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetYx = e.clientY;
});
  


function animate() {
  x += (targetX - x) * 0.12;
  y += (targetYx - y) * 0.08;
 if (sunflower) {
  sunflower.style.left = x + "px";
  sunflower.style.top = y + "px";
 }

  requestAnimationFrame(animate);
}
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

animate();
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
      { width: "80%", borderRadius: "16px", margin: "200px auto", padding: "48px" },
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
}, { rootMargin: "0px 0px -25% 0px" });

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
const cards = Array.from(document.querySelectorAll(".cf-card"));
const dotsEl = document.getElementById("cf-dots");
let current = 0;
const total = cards.length;

function mod(n, m) { return ((n % m) + m) % m; }

// build dots
cards.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "cf-dot";
  dot.addEventListener("click", () => { current = i; update(); });
  dotsEl.appendChild(dot);
});

function update() {
  const prev = mod(current - 1, total);
  const next = mod(current + 1, total);

  cards.forEach((card, i) => {
    card.className = "cf-card";
    if (i === current) card.classList.add("active");
    else if (i === prev) card.classList.add("prev");
    else if (i === next) card.classList.add("next");
  });

  document.querySelectorAll(".cf-dot").forEach((d, i) => {
    d.className = "cf-dot" + (i === current ? " active" : "");
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("prev")) current = mod(current - 1, total);
    else if (card.classList.contains("next")) current = mod(current + 1, total);
    update();
  });
});

const cfContainer = document.getElementById("activities-section");

if (cfContainer) {  
document.getElementById("cf-prev").addEventListener("click", () => {
  current = mod(current - 1, total); update();
});

document.getElementById("cf-next").addEventListener("click", () => {
  current = mod(current + 1, total); update();
});
}
update();





