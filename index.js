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

window.addEventListener("load", () => {
  const track = document.getElementById("track-left");
  if (track) {
    track.innerHTML += track.innerHTML;

    const originalWidth = track.scrollWidth / 2.2;
    track.style.setProperty("--scroll-distance", `-${originalWidth}px`);
  }

  track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseout", () => {
    track.style.animationPlayState = "running";
});


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

document.getElementById("cf-prev").addEventListener("click", () => {
  current = mod(current - 1, total); update();
});

document.getElementById("cf-next").addEventListener("click", () => {
  current = mod(current + 1, total); update();
});

update();



