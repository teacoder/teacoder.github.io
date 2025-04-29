var navType = document.getElementsByName('navtype')[0].content;
const nav = document.querySelector( '.navBar' )
fetch( '/navbar.html')
.then( res=>res.text())
.then(data=>{
	nav.innerHTML=data});

var element = document.getElementById(${navType});
element.classList.add("main-navigation-button-active");
