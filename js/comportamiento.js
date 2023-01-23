//Al abrir pagina
pagina_inicio();


//Asignacion de Listener
document.getElementById("pagina-inicio").addEventListener('click',pagina_inicio);
document.getElementById("datos-personales").addEventListener('click',datos_personales);
document.getElementById("linea-tiempo").addEventListener('click',linea_tiempo);
document.getElementById("contacto").addEventListener('click',contactar);



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

	//cerramos el menu desplegable e iniciamos el indice
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
	//cerramos el menu desplegable e iniciamos el indice
	cerrar_menu();

	limpia("lista-indice");
	limpia("cuerpo");

	crea_indice();

	//carga 2 items al indice
	carga_items(2,"lista-indice");
	//reellena con 2 links hacia dadtos personales y haabilidaades
	elemento=document.getElementById("item1");
	elemento.class="nav-item";
	elemento.id="persona";
	crea_inserta("a","link1","Mi persona","persona");
	
	elemento=document.getElementById("link1");
	elemento.class="nav-link";
	elemento.href="#mi-persona";


	elemento=document.getElementById("item2");
	elemento.class="nav-item";
	elemento.id="habilidades";
	crea_inserta("a","link2","Mis Habilidades","habilidades");
	
	elemento=document.getElementById("link2");
	elemento.class="nav-link";
	elemento.href="#mis-habilidades";

	//Crea Tittulo y enlista los datos personales
	crea_inserta("h1","mi-persona","Mi persona","cuerpo");
	crea_inserta("ul","lista-mi-persona","","cuerpo");

	carga_items(6,"lista-mi-persona");
	document.getElementById("item1").innerHTML="Nomnbre: Clinton Brat Gomez";
	document.getElementById("item2").innerHTML="Edad:\t27 años";
	document.getElementById("item3").innerHTML="Direccion:\t3370 James St";
	document.getElementById("item4").innerHTML="Telef Fijo:\t(868) 266-6163";
	document.getElementById("item5").innerHTML="Telef Cel:\t(111) 222-3344";
	document.getElementById("item6").innerHTML="Correo:\tclinton.gomez@example.com";
	
	//Crera titulos, subtitulos y describe habilidades
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
	var cargo,periodo,descripcion;
	//cerramos el menu desplegable e iniciamos el indice 
	cerrar_menu();

	limpia("lista-indice");
	limpia("cuerpo");

	crea_indice();

	//Cargamos el indice con items representando los años que queremos mostrar, en nuestro caaso son 5
	carga_items(5,"lista-indice");
	//Creamos los links 
	crea_inserta("a","anio1","2015","item1");
	document.getElementById("anio1").href="#cargo1";
	crea_inserta("a","anio2","2016","item2");
	document.getElementById("anio2").href="#cargo2";
	crea_inserta("a","anio3","2018","item3");
	document.getElementById("anio3").href="#cargo3";
	crea_inserta("a","anio4","2019","item4");
	document.getElementById("anio4").href="#cargo4";
	crea_inserta("a","anio5","2022","item5");
	document.getElementById("anio5").href="#cargo5";
	//Creamos los titulos, subtitulos y las descripcciones de los cargos
	for (var i = 1; i <= 5; i++) {
		crea_inserta("h2","cargo"+i,"","cuerpo");
		crea_inserta("h4","periodo"+i,"","cuerpo");
		crea_inserta("p","descripcion"+i,"","cuerpo");
	}
	//Modificamos el contenido de los cargos perioddos y descripciones
	cargo="Mantenimiento y Documentacion - Emprendimiento";
	periodo="Agosto - Diciembre (2015)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula."
	document.getElementById("cargo1").innerHTML=cargo;
	document.getElementById("periodo1").innerHTML=periodo;
	document.getElementById("descripcion1").innerHTML=descripcion;

	cargo="Desarrollo en Java - Emprendimiento";
	periodo="Mayo - Julio (2016)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("cargo2").innerHTML=cargo;
	document.getElementById("periodo2").innerHTML=periodo;
	document.getElementById("descripcion2").innerHTML=descripcion;

	cargo="Mantenimiento - Biblioteca UNSa";
	periodo="Marzo - Julio (2018)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("cargo3").innerHTML=cargo;
	document.getElementById("periodo3").innerHTML=periodo;
	document.getElementById("descripcion3").innerHTML=descripcion;

	cargo="Auxiliar - Programacion  Numerica";
	periodo="Agosto - Noviembre (2019)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("cargo4").innerHTML=cargo;
	document.getElementById("periodo4").innerHTML=periodo;
	document.getElementById("descripcion4").innerHTML=descripcion;

	cargo="Desarrollador Web - 'Techman'";
	periodo="Abril - Septiembre (2022s)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("cargo5").innerHTML=cargo;
	document.getElementById("periodo5").innerHTML=periodo;
	document.getElementById("descripcion5").innerHTML=descripcion;
}

function contactar(){
	//Cerrar menu, limpia indice y cuerpo, por ultimo se modifica convenientemente 
	cerrar_menu();
	limpia("lista-indice");
	limpia("cuerpo");
	crea_indice();

	//Se agregaran dos items, para contactarse por correo o por wpp
	carga_items(2,"lista-indice");
	
	//Se cargan los links
	crea_inserta("a","envia-correo","Enviar Correo","item1");
	document.getElementById("item1").href="#correo";
	crea_inserta("a","envia-wpp","Enviar Wpp","item2");
	document.getElementById("item2").href="#wpp";

	//Se creara un formulario y un area donde pondremos enlaces
	crea_inserta("form","formulario","","cuerpo");
	//creamos un titulo para el formulario y un parrafo indicativo
	crea_inserta("h2","correo","Enviame un correo y contactame","formulario");
	crea_inserta("p","","En el formulario hay campos oobligatorios *","formulario");

	for(var i = 1; i<=3; i++){
		crea_inserta("p","parrafo"+i,"","formulario");
		crea_inserta("label","etiqueta"+i,"","parrafo"+i);
		crea_inserta("span","contenido"+i,"","etiqueta"+i);
		crea_inserta("strong","strong"+i,"","etiqueta"+i);
		crea_inserta("abbr","abbr"+i,"*","strong"+i);
		crea_inserta("input","entrada"+i,"","parrafo"+i);

		//Asignamos los atributos correspondientes

		document.getElementById("etiqueta"+i).for=("entrada"+i);
		document.getElementById("abbr"+i).title="required";
		document.getElementById("entrada"+i).name="name"+i;
	}

	//Asignamos contenido para facilitar la interaccion con el formulario
	document.getElementById("contenido1").innerHTML="Tu Nombre";
	document.getElementById("contenido2").innerHTML="Tu Correo";
	document.getElementById("contenido3").innerHTML="Tu Mensaje";

}

/**
<p>
		      <label for="name">
		        <span>Nombre:</span>
		        <strong><abbr title="required">*</abbr></strong>
		      </label>
		      <input type="text" id="name" name="username">
		    </p>
*/



