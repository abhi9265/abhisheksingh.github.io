const progress = document.querySelector(".scroll-progress");

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = value + "%";
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
