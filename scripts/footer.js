// Read the <meta name="footer" content="..."> value.
const footerMeta = document.getElementsByName('footer')[0];
const footerType = footerMeta ? footerMeta.content : null;

// Select the container where the footer will be injected.
const footer = document.querySelector('.footer');
if (!footer) {
	console.warn('Footer container not found');
	document.dispatchEvent(new CustomEvent('footerReady'));
} else {
	// Fetch the external footer HTML file.
	fetch('/footer.html')
		.then(res => res.text())
		.then(data => {
			// Parse the fetched HTML string into a document.
			const parser = new DOMParser();
			const doc = parser.parseFromString(data, 'text/html');
			
			// Grab only the footer block to avoid extra wrappers
			const footerContent = doc.querySelector('.main-footer');
			if (!footerContent) {
				console.error('No .main-footer found in footer.html');
				document.dispatchEvent(new CustomEvent('footerReady'));
				return;
			}
			
			// Inject footer markup into placeholder
			footer.innerHTML = footerContent.outerHTML;
			// Signal that footer is ready after a small delay to let DOM settle
			setTimeout(() => {
				document.dispatchEvent(new CustomEvent('footerReady'));
			}, 10);
		})
		.catch(err => {
			console.error('Failed to load footer', err);
			document.dispatchEvent(new CustomEvent('footerReady'));
		});
}
