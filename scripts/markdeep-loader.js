// markdeep-loader.js

// Track readiness of components
let navbarReady = false;
let footerReady = false;

function loadMarkdeepWhenReady() {
  if (navbarReady && footerReady) {
    const script = document.createElement('script');
    script.src = 'https://morgan3d.github.io/markdeep/latest/markdeep.min.js';
    document.head.appendChild(script);
  }
}

// Listen for navbar/footer readiness events
document.addEventListener('navbarReady', () => {
  navbarReady = true;
  loadMarkdeepWhenReady();
});

document.addEventListener('footerReady', () => {
  footerReady = true;
  loadMarkdeepWhenReady();
});

// Fallback in case events never fire
window.addEventListener('load', () => {
  setTimeout(loadMarkdeepWhenReady, 200);
});
