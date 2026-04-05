(function () {
  function initDropdowns() {
    const triggers = document.querySelectorAll("[data-dropdown]");
    if (!triggers.length) return;

    function close(id) {
      const button = document.querySelector(`[data-dropdown="${id}"]`);
      const dropdown = document.getElementById(id);
      if (button && dropdown) {
        button.classList.remove("open");
        dropdown.classList.remove("visible");
      }
    }

    function open(id) {
      triggers.forEach((trigger) => {
        if (trigger.dataset.dropdown !== id) close(trigger.dataset.dropdown);
      });

      const button = document.querySelector(`[data-dropdown="${id}"]`);
      const dropdown = document.getElementById(id);
      if (button && dropdown) {
        button.classList.add("open");
        dropdown.classList.add("visible");
      }
    }

    function closeAll() {
      triggers.forEach((trigger) => close(trigger.dataset.dropdown));
    }

    triggers.forEach((trigger) => {
      const id = trigger.dataset.dropdown;
      const dropdown = document.getElementById(id);
      let timer;

      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        trigger.classList.contains("open") ? close(id) : open(id);
      });

      trigger.addEventListener("mouseenter", () => {
        clearTimeout(timer);
        open(id);
      });

      trigger.addEventListener("mouseleave", () => {
        timer = setTimeout(() => close(id), 130);
      });

      if (!dropdown) return;

      dropdown.addEventListener("mouseenter", () => clearTimeout(timer));
      dropdown.addEventListener("mouseleave", () => {
        timer = setTimeout(() => close(id), 130);
      });
      dropdown.addEventListener("click", (event) => event.stopPropagation());
    });

    document.addEventListener("click", closeAll);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeAll();
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  function initCounters() {
    const counters = document.querySelectorAll(".js-count");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const target = Number(element.dataset.target || 0);
          const duration = Number(element.dataset.duration || 1800);
          let start = null;

          function step(timestamp) {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            element.textContent = Math.floor(ease * target).toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              element.textContent = target.toLocaleString();
            }
          }

          requestAnimationFrame(step);
          observer.unobserve(element);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function observeVisuals(map) {
    const entries = Object.entries(map || {}).filter(([id, handler]) => {
      return document.getElementById(id) && typeof handler === "function";
    });

    if (!entries.length) return;

    const observer = new IntersectionObserver(
      (intersectionEntries) => {
        intersectionEntries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.dataset.animated) return;
          entry.target.dataset.animated = "1";
          const handler = map[entry.target.id];
          if (typeof handler === "function") handler();
        });
      },
      { threshold: 0.15 }
    );

    entries.forEach(([id]) => observer.observe(document.getElementById(id)));
  }

  window.EnginsightSite = {
    initDropdowns,
    initReveal,
    initCounters,
    observeVisuals,
  };

  document.addEventListener("DOMContentLoaded", function () {
    initDropdowns();
    initReveal();
    initCounters();
  });
})();
