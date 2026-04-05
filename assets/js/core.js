document.addEventListener("DOMContentLoaded", function () {
  const site = window.EnginsightSite;
  if (!site) return;

  site.observeVisuals({
    "core-hero-visual": activateHeroVisual,
    "core-dashboard-showcase": activateDashboardVisual,
  });

  window.addEventListener("load", function () {
    setTimeout(activateHeroVisual, 250);
  });
});

function activateHeroVisual() {
  const hero = document.getElementById("core-hero-visual");
  if (!hero || hero.dataset.animated) return;
  hero.dataset.animated = "1";
  hero.classList.add("is-active");
}

function activateDashboardVisual() {
  const dashboard = document.getElementById("core-dashboard-showcase");
  if (!dashboard || dashboard.dataset.animated) return;
  dashboard.dataset.animated = "1";
  dashboard.classList.add("is-active");
}
