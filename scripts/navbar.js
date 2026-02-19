// Read the <meta name="navtype" content="..."> value. 
// This tells the script which nav item should be highlighted on this page.
var navType = document.getElementsByName('navtype')[0].content;

//Select the container where the navigation bar will be injected.
const nav = document.querySelector( '.navBar' )
//Fetch the external navbar HTML file.
//This keeps the navigation bar consistent across all pages.
fetch( './navbar.html')
	.then( res=>res.text()) //Convers the response to text.
	.then(data=>{
		//Parse the fetched HTML string into a document.
		const parser = new DOMParser()
		const doc = parser.parseFromString( data, "text/html")
		//Highlight the active navigation item based on the navType value.
		doc.getElementById(navType).classList.add("main-navigation-button-active")
		//Inject the modified navigation bar HTML into the container.
		nav.innerHTML = new XMLSerializer().serializeToString(doc)
	})	
