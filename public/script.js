const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const rotatingService = document.getElementById("rotatingService");
const projectsCount = document.getElementById("projectsCount");
const services = [
  "AI Agents",
  "Web Development",
  "Mobile Applications",
  "Software Solutions",
  "Cloud & DevOps",
  "Automation Systems",
  "SaaS Products",
  "Business Platforms",
  "Custom Portals"
];

let serviceIndex = 0;
setInterval(() => {
  serviceIndex = (serviceIndex + 1) % services.length;
  rotatingService.animate(
    [
      { opacity: 0, transform: "translateY(15px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 300, easing: "ease-out" }
  );
  rotatingService.textContent = services[serviceIndex];
}, 2000);

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

let counted = false;
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting || counted) return;
    counted = true;
    const end = 50;
    const duration = 700;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      projectsCount.textContent = Math.round(end * eased);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}, { threshold: 0.6 });

countObserver.observe(projectsCount);
