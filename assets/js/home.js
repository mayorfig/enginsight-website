document.addEventListener("DOMContentLoaded", function () {
  const site = window.EnginsightSite;
  if (!site) return;

  site.observeVisuals({
    "vis-host": animateHost,
    "vis-ids": animateIDS,
    "vis-mdr": animateMDR,
    "vis-risk": animateRisk,
    "vis-atk": animateAtk,
  });

  window.addEventListener("load", function () {
    setTimeout(animateHost, 600);
  });
});

function animateHost() {
  setTimeout(() => { document.getElementById("cpu-arc").style.strokeDasharray = "1.9 60.9"; }, 100);
  setTimeout(() => { document.getElementById("ram-arc").style.strokeDasharray = "10.0 52.8"; }, 200);
  setTimeout(() => { document.getElementById("swap-arc").style.strokeDasharray = "0 62.8"; }, 300);

  const segs = document.querySelectorAll(".donut-seg");
  const data = [[81.7, 238.76], [36.8, 238.76], [33.2, 238.76], [29.2, 238.76], [18.2, 238.76], [18.2, 238.76], [18.0, 238.76]];
  segs.forEach((seg, index) => {
    if (index >= data.length) return;
    setTimeout(() => {
      seg.style.strokeDasharray = `${data[index][0] - 2} ${data[index][1] - (data[index][0] - 2)}`;
    }, 200 + index * 80);
  });

  const totalEl = document.getElementById("vuln-total");
  if (totalEl) {
    let n = 0;
    const interval = setInterval(() => {
      n += 17;
      if (n >= 651) {
        clearInterval(interval);
        n = 651;
      }
      totalEl.textContent = n;
    }, 20);
  }

  setTimeout(() => { const el = document.getElementById("bar-debian"); if (el) el.style.width = "95%"; }, 400);
  setTimeout(() => { const el = document.getElementById("bar-ubuntu"); if (el) el.style.width = "95%"; }, 550);

  const idsSegs = document.querySelectorAll(".ids-donut-seg");
  const idsData = [[94.7, 150.8], [40.7, 150.8], [12.5, 150.8]];
  idsSegs.forEach((seg, index) => {
    if (index >= idsData.length) return;
    setTimeout(() => {
      seg.style.strokeDasharray = `${idsData[index][0] - 2} ${idsData[index][1] - (idsData[index][0] - 2)}`;
    }, 500 + index * 100);
  });
}

function animateIDS() {
  const container = document.getElementById("ids-bars");
  if (!container || container.children.length) return;

  const bars = [];
  for (let i = 0; i < 48; i += 1) {
    const base = Math.random();
    const total = 30 + base * 60 + Math.sin(i / 3) * 15;
    bars.push({
      low: total * 0.52,
      med: total * 0.28,
      high: total * 0.16,
      blocked: total * 0.04,
    });
  }

  const maxTotal = Math.max(...bars.map((bar) => bar.low + bar.med + bar.high + bar.blocked));
  const maxHeight = 85;

  bars.forEach((bar, index) => {
    const total = bar.low + bar.med + bar.high + bar.blocked;
    const group = document.createElement("div");
    group.className = "ids-bar-group";

    const lowHeight = (bar.low / maxTotal) * maxHeight;
    const medHeight = (bar.med / maxTotal) * maxHeight;
    const highHeight = (bar.high / maxTotal) * maxHeight;
    const blockedHeight = (bar.blocked / maxTotal) * maxHeight;

    group.innerHTML = `
      <div class="ids-seg" style="height:0;background:#FF453A" data-h="${blockedHeight.toFixed(1)}"></div>
      <div class="ids-seg" style="height:0;background:#FF6B0A" data-h="${highHeight.toFixed(1)}"></div>
      <div class="ids-seg" style="height:0;background:#FFB340" data-h="${medHeight.toFixed(1)}"></div>
      <div class="ids-seg" style="height:0;background:#3D8EF0" data-h="${lowHeight.toFixed(1)}"></div>
    `;

    container.appendChild(group);
    const segs = group.querySelectorAll(".ids-seg");
    segs.forEach((seg, segIndex) => {
      setTimeout(() => {
        seg.style.transition = `height .5s ease ${segIndex * 0.04}s`;
        seg.style.height = `${seg.dataset.h}px`;
      }, 100 + index * 12);
    });
  });
}

function animateMDR() {
  const badEl = document.getElementById("mdr-bad-num");
  if (badEl) {
    let n = 0;
    const interval = setInterval(() => {
      n += 1;
      if (n >= 11) clearInterval(interval);
      badEl.textContent = `${n}h`;
    }, 120);
  }

  const goodEl = document.getElementById("mdr-good-num");
  if (goodEl) {
    let n = 0;
    const interval = setInterval(() => {
      n += 1;
      if (n >= 11) {
        clearInterval(interval);
        goodEl.textContent = "11 min";
        return;
      }
      goodEl.textContent = n;
    }, 80);
  }
}

function animateRisk() {
  setTimeout(() => {
    const ring = document.getElementById("risk-ring");
    if (ring) ring.style.strokeDasharray = "79.3 58.9";
  }, 100);

  const scoreEl = document.getElementById("risk-score-num");
  if (scoreEl) {
    let n = 0;
    const interval = setInterval(() => {
      n += 7;
      if (n >= 574) {
        clearInterval(interval);
        n = 574;
      }
      scoreEl.textContent = n;
    }, 15);
  }

  setTimeout(() => { const el = document.getElementById("sev-crit"); if (el) el.style.width = `${(2 / 45) * 100}%`; }, 200);
  setTimeout(() => { const el = document.getElementById("sev-high"); if (el) el.style.width = `${(7 / 45) * 100}%`; }, 300);
  setTimeout(() => { const el = document.getElementById("sev-med"); if (el) el.style.width = "100%"; }, 400);
  setTimeout(() => { const el = document.getElementById("sev-low"); if (el) el.style.width = `${(11 / 45) * 100}%`; }, 500);
}

function animateAtk() {
  const segs1 = document.querySelectorAll("#atk-donut-1 .atk-seg");
  const segs2 = document.querySelectorAll("#atk-donut-2 .atk-seg");
  const segs3 = document.querySelectorAll("#atk-donut-3 .atk-seg");

  const data1 = [[164.5, 175.9], [1.0, 175.9], [9.0, 175.9]];
  const data2 = [[87.0, 175.9], [52.8, 175.9], [34.5, 175.9]];
  const data3 = [[175.7, 175.9], [0.2, 175.9]];

  [[segs1, data1], [segs2, data2], [segs3, data3]].forEach(([segs, data], groupIndex) => {
    segs.forEach((seg, index) => {
      if (index >= data.length) return;
      setTimeout(() => {
        seg.style.strokeDasharray = `${data[index][0] - 2} ${data[index][1] - (data[index][0] - 2)}`;
      }, 300 + groupIndex * 150 + index * 80);
    });
  });
}
