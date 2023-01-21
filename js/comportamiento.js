document.getElementById("inicio").addEventListener('click',pagina_inicio());
document.getElementById("datospersonales").addEventListener('click',modifica());

pagina_inicio();


function pagina_inicio(){
	document.getElementById('cuerpo').innerHTML="<h1 id='bienvenido'>Bienvenido/a a 'Mi CV Onnline'</h1>\n<h2 >Proyecto final en FrontEnd</h2>\n<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu rutrum diam, nec consectetur ante. Etiam interdum justo et ante venenatis, eu venenatis justo suscipit. Nulla rhoncus sit amet turpis in malesuada. Proin ultrices aliquet sem, in tristique lectus. Ut ac magna tortor. Phasellus dapibus odio non venenatis consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sed nisl sed sapien posuere porta. Nullam ultricies eros at ultrices placerat. Donec sollicitudin, est ac sollicitudin tempus, turpis felis tristique orci, eget consectetur dolor sem feugiat mi. Vivamus sem ante, interdum quis fringilla at, rutrum scelerisque sem. Curabitur tempus lectus vitae mauris luctus lobortis. Suspendisse potenti. Donec diam arcu, tristique sed erat gravida, suscipit ultrices dui. Maecenas vehicula magna non sodales finibus. Etiam porta nulla in urna feugiat scelerisque. Ut id sollicitudin ligula. Quisque in nunc in enim scelerisque ultrices. Cras nec auctor nulla. Nunc efficitur bibendum orci tincidunt faucibus. Ut imperdiet feugiat ante non posuere. Nunc tellus dui, vestibulum quis lorem vel, vulputate dapibus eros. Curabitur molestie sapien in nibh egestas, at venenatis nisl hendrerit. Nullam pharetra sollicitudin faucibus. Integer mollis maximus est eu cursus. Etiam libero lectus, euismod eu erat in, sodales tincidunt ligula. Morbi ullamcorper massa ac mi cursus malesuada. Vestibulum feugiat fermentum magna, nec facilisis mi. Vestibulum blandit auctor finibus.</p>\n<h1 id='autor'>Desarrollado por Franco Cristian</h1>\n<p >Año 2023, Febrero 1</p>\n"
}

function modifica(){
	const cuerpo = document.getElementById('cuerpo');
	console.log(cuerpo);
}
