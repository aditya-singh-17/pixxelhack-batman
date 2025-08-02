// Loader: Hide after 2 seconds and show main content
window.onload = function() {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000);
};

// Batman Qualities Hover Effect
const qualities = document.querySelectorAll(".quality");
const qualityPhoto = document.getElementById("quality-photo");

qualities.forEach(q => {
  q.addEventListener("mouseenter", () => {
    qualityPhoto.src = q.getAttribute("data-photo");
    qualityPhoto.classList.add("show");
  });
  q.addEventListener("mouseleave", () => {
    qualityPhoto.classList.remove("show");
  });
});

// Ripple Click Effect
document.addEventListener('click', function(e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  ripple.style.top = (e.clientY - 10) + 'px';
  ripple.style.left = (e.clientX - 10) + 'px';
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});