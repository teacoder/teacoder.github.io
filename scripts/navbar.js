var navType = document.getElementsByName('navtype')[0].content;
const nav = document.querySelector( '.navBar' )
fetch( './navbar.html')
	.then( res=>res.text())
	.then(data=>{
		const parser = new DOMParser()
		const doc = parser.parseFromString( data, "text/html")
		doc.getElementById(navType).classList.add("main-navigation-button-active")
		nav.innerHTML = new XMLSerializer().serializeToString(doc)
	})	
