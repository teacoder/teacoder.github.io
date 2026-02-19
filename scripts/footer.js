// Read the <meta name="footer" content="..."> value. 
// This tells the script which nav item should be highlighted on this page.
var footerType = document.getElementsByName('footer')[0].content;

//Select the container where the footer will be injected.
const footer = document.querySelector( '.footer' )
//Fetch the external footer HTML file.
//This keeps the footer consistent across all pages.
fetch( './footer.html')
	.then( res=>res.text()) //Convers the response to text.
	.then(data=>{
		//Parse the fetched HTML string into a document.
		const parser = new DOMParser()
		const doc = parser.parseFromString( data, "text/html")
		footer.innerHTML = new XMLSerializer().serializeToString(doc)
	})
