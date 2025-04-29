var navType = document.getElementsByName('navtype')[0].content;
console.log(navType);
const nav = document.querySelector( '.navBar' )
fetch( '/navbar.html')
.then( res=>res.text())
.then(data=>{
	nav.innerHTML=data});
//Set class on element from document 'navtype'
var element = document.getElementById('${navType}');
element.classList.add("main-navigation-button-active");
