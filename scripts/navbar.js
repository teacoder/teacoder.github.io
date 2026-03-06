// navbar.js
// This script fetches the shared navbar HTML and highlights the
// currently active section based on the <meta name="navtype"> tag.

// read active type from meta tag
const navTypeMeta = document.getElementsByName('navtype')[0];
const navType = navTypeMeta ? navTypeMeta.content : null;

// container where navbar will be injected
const nav = document.querySelector('.navbar');
if (!nav) {
  console.warn('Navbar container not found');
  document.dispatchEvent(new CustomEvent('navbarReady'));
} else {
  // use root‑relative path so pages in subfolders work
  fetch('/navbar.html')
    .then(res => res.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');

      // grab only the header block to avoid extra wrappers
      const header = doc.querySelector('.main-header');
      if (!header) {
        console.error('No .main-header found in navbar.html');
        document.dispatchEvent(new CustomEvent('navbarReady'));
        return;
      }

      // highlight active nav item inside the header
      if (navType) {
        const active = header.querySelector('#' + navType);
        if (active) {
          active.classList.add('main-navigation-button-active');
        }
      }

      // inject header markup into placeholder
      nav.innerHTML = header.outerHTML;
      // Signal that navbar is ready after a small delay to let DOM settle
      setTimeout(() => {
        document.dispatchEvent(new CustomEvent('navbarReady'));
      }, 10);
    })
    .catch(err => {
      console.error('Failed to load navbar', err);
      document.dispatchEvent(new CustomEvent('navbarReady'));
    });
}