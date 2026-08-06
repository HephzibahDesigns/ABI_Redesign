// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("nav-scrolled", window.scrollY > 40);
});

// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");
menuBtn.addEventListener("click", () => {
  const open = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", open);
  iconMenu.classList.toggle("hidden", !open);
  iconClose.classList.toggle("hidden", open);
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    iconMenu.classList.remove("hidden");
    iconClose.classList.add("hidden");
  })
);

// Active nav link switching
const navLinks = document.querySelectorAll(".nav-link[data-section]");
const navSections = Array.from(navLinks)
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);

function setActiveLink(sectionId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === sectionId);
  });
}

// Click: switch instantly, no waiting for scroll to catch up
navLinks.forEach((link) => {
  link.addEventListener("click", () => setActiveLink(link.dataset.section));
});

// Scroll: keep active link in sync with section in view
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);
navSections.forEach((section) => sectionObserver.observe(section));

// Set initial active tab on load
setActiveLink("home");

// Scroll-triggered reveal animations
(function () {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Elements that fade in as a single block
  const soloTargets = document.querySelectorAll("[data-animate]");

  // Repeating groups that reveal item-by-item with a stagger,
  // grouped automatically by shared parent
  const groupSelectors = [
    ".feat-card",
    ".faq-item",
    ".space-y-7 > div",
    ".grid.grid-cols-2.gap-3 > div",
    "#contact .grid > div",
  ];
  const groupTargets = document.querySelectorAll(groupSelectors.join(", "));

  const allTargets = [...soloTargets, ...groupTargets];
  if (!allTargets.length) return;

  if (reduceMotion) {
    allTargets.forEach((el) => el.classList.add("in-view"));
    return;
  }

  // Stagger delay: index within each shared parent
  const groupCounts = new Map();
  groupTargets.forEach((el) => {
    const parent = el.parentElement;
    const idx = groupCounts.get(parent) || 0;
    el.style.transitionDelay = `${Math.min(idx * 90, 360)}ms`;
    groupCounts.set(parent, idx + 1);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  allTargets.forEach((el) => revealObserver.observe(el));
})();

// FAQ accordion
document.querySelectorAll(".faq-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".faq-item");
    const body = item.querySelector(".faq-body");
    const icon = item.querySelector(".faq-icon");
    const wasOpen = body.classList.contains("open");
    document
      .querySelectorAll(".faq-body")
      .forEach((b) => b.classList.remove("open"));
    document
      .querySelectorAll(".faq-icon")
      .forEach((i) => i.classList.remove("open"));
    if (!wasOpen) {
      body.classList.add("open");
      icon.classList.add("open");
    }
  });
});
