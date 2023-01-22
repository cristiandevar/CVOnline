//Al abrir pagina
pagina_inicio();


//Asignacion de Listener
document.getElementById("pagina-inicio").addEventListener('click',pagina_inicio);
document.getElementById("datos-personales").addEventListener('click',datos_personales);
document.getElementById("linea-tiempo").addEventListener('click',linea_tiempo);



//Funcione

function cerrar_menu(){
	document.getElementById("menu").click();
}

function crea_inserta(nombre,id_elemento,contenido,id_destino){
	let elemento=document.createElement(nombre);
	const destino=document.getElementById(id_destino);
	
	elemento.id=id_elemento;
	elemento.innerHTML=contenido;
	destino.appendChild(elemento);
}

function limpia(id_elemento){
	document.getElementById(id_elemento).innerHTML="";	
}

function crea_indice(){
	crea_inserta("h3","","Indice","lista-indice");
	crea_inserta("hr","","","lista-indice");
}

function carga_items(cant,lista){
	var id_item;
	for (var i = 1; i <= cant; i++) {
		id_item="item"+i;
		crea_inserta("li",id_item,"",lista);
	}
}

function pagina_inicio(){
	var elemento;

	limpia("lista-indice");
	limpia("cuerpo");

	crea_indice();

	crea_inserta("li","item1","","lista-indice");
	crea_inserta("a","link1","Bienvenido","item1");
	elemento=document.getElementById("item1");
	elemento.class="nav-item";
	elemento=document.getElementById("link1");
	elemento.class="nav-link";
	elemento.href="#bienvenido";

	crea_inserta("li","item2","","lista-indice");
	crea_inserta("a","link2","Autor","item2");
	elemento=document.getElementById("item2");
	elemento.class="nav-item";
	elemento=document.getElementById("link2");
	elemento.class="nav-link";
	elemento.href="#autor";
	


	crea_inserta("h1","bienvenido","Bienvenido/a a 'Mi CV Onnline'","cuerpo");
	crea_inserta("h2","","Proyecto final en FrontEnd","cuerpo");
	crea_inserta("p","","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu rutrum diam, nec consectetur ante. Etiam interdum justo et ante venenatis, eu venenatis justo suscipit. Nulla rhoncus sit amet turpis in malesuada. Proin ultrices aliquet sem, in tristique lectus. Ut ac magna tortor. Phasellus dapibus odio non venenatis consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sed nisl sed sapien posuere porta. Nullam ultricies eros at ultrices placerat. Donec sollicitudin, est ac sollicitudin tempus, turpis felis tristique orci, eget consectetur dolor sem feugiat mi. Vivamus sem ante, interdum quis fringilla at, rutrum scelerisque sem. Curabitur tempus lectus vitae mauris luctus lobortis. Suspendisse potenti. Donec diam arcu, tristique sed erat gravida, suscipit ultrices dui. Maecenas vehicula magna non sodales finibus. Etiam porta nulla in urna feugiat scelerisque. Ut id sollicitudin ligula. Quisque in nunc in enim scelerisque ultrices. Cras nec auctor nulla. Nunc efficitur bibendum orci tincidunt faucibus. Ut imperdiet feugiat ante non posuere. Nunc tellus dui, vestibulum quis lorem vel, vulputate dapibus eros. Curabitur molestie sapien in nibh egestas, at venenatis nisl hendrerit. Nullam pharetra sollicitudin faucibus. Integer mollis maximus est eu cursus. Etiam libero lectus, euismod eu erat in, sodales tincidunt ligula. Morbi ullamcorper massa ac mi cursus malesuada. Vestibulum feugiat fermentum magna, nec facilisis mi. Vestibulum blandit auctor finibus","cuerpo");

	crea_inserta("h1","autor","Desarrollado por Franco Cristian","cuerpo");
	crea_inserta("p","","Año 2023, Febrero 1","cuerpo");
}

function datos_personales(){
	var elemento;

	cerrar_menu();

	limpia("lista-indice");
	limpia("cuerpo");

	crea_indice();

	crea_inserta("li","item1","","lista-indice");
	crea_inserta("a","link1","Mi persona","item1");
	elemento=document.getElementById("item1");
	elemento.class="nav-item";
	elemento=document.getElementById("link1");
	elemento.class="nav-link";
	elemento.href="#mi-persona";

	crea_inserta("li","item2","","lista-indice");
	crea_inserta("a","link2","Mis Habilidades","item2");
	elemento=document.getElementById("item2");
	elemento.class="nav-item";
	elemento=document.getElementById("link2");
	elemento.class="nav-link";
	elemento.href="#mis-habilidades";

	crea_inserta("h1","mi-persona","Mi persona","cuerpo");
	crea_inserta("ul","lista-mi-persona","","cuerpo");
	crea_inserta("li","ayn","Nomnbre: Clinton Brat Gomez","lista-mi-persona");
	crea_inserta("li","edad","Edad:\t27 años","lista-mi-persona");
	crea_inserta("li","direccion","Direccion:\t3370 James St","lista-mi-persona");
	crea_inserta("li","fijo","Telef Fijo:\t(868) 266-6163","lista-mi-persona");
	crea_inserta("li","cel","Telef Cel:\t(111) 222-3344","lista-mi-persona");
	
	crea_inserta("h1","mis-habilidades","Mis habilidades","cuerpo");
	crea_inserta("h2","","Habnilidad1","cuerpo");
	crea_inserta("p","","Explicacion1 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
	crea_inserta("h2","","Habnilidad2","cuerpo");
	crea_inserta("p","","Explicacion2 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
	crea_inserta("h2","","Habnilidad3","cuerpo");
	crea_inserta("p","","Explicacion2 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
	crea_inserta("h2","","Habnilidad4","cuerpo");
	crea_inserta("p","","Explicacion2 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
}

function linea_tiempo(){
	var elemento,item;

	cerrar_menu();

	limpia("lista-indice");
	limpia("cuerpo");

	crea_indice();

	carga_items(5,"lista-indice");

	crea_inserta("a","anio1","2015","item1");
	document.getElementById("anio1").href="#2015";
	crea_inserta("a","anio2","2016","item2");
	document.getElementById("anio2").href="#2016";
	crea_inserta("a","anio3","2018","item3");
	document.getElementById("anio3").href="#2018";
	crea_inserta("a","anio4","2019","item4");
	document.getElementById("anio4").href="#2019";
	crea_inserta("a","anio5","2022","item5");
	document.getElementById("anio5").href="#2022";

	
}


