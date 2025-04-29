const nav = document.querySelector( '.navBar' )
fetch( '/navbar.html')
.then( res=>res.text())
.then(data=>{
	nav.innerHTML=data})
