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
	
	crea_inserta("h3","titulo-indice","Indice","lista-indice");
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
	var elemento,texto;

	//iniciamos el indice
	limpia("lista-indice");
	limpia("cuerpo");
	crea_indice();

	//carga 2 items al indice
	carga_items(2,"lista-indice");

	//modificamos el icono de bienvenidos y damos referencia al link
	document.getElementById("item1").innerHTML="<i class='fa-solid fa-hand'></i>";
	crea_inserta("a","link1"," Bienvenido","item1");
	elemento=document.getElementById("link1");
	elemento.href="#bienvenido";
	
	//modificamos el icono de autor y damos referencia al link
	document.getElementById("item2").innerHTML="<i class='fa-solid fa-code'></i>";
	crea_inserta("a","link2"," Autor","item2");
	elemento=document.getElementById("link2");
	elemento.href="#autor";
	

	//Cargamos el cuerpo
	crea_inserta("h1","bienvenido","Bienvenido/a a 'Mi CV Onnline'","cuerpo");
	crea_inserta("h2","","Proyecto final en FrontEnd","cuerpo");
	crea_inserta("p","parrafo1","","cuerpo");
	texto="Aqui iria un texto de bienvenida, dando a conocer el porque de la pagina, para quien esta dirigida, etc. Nosotros utilizaremos un texto generado de la pagiga https://www.lipsum.com/. Tambien recuerde que si quiere agregar saltos de linea debe que utilizar el elemento 'br' para que surja efecto en el documento HTML";
	texto+="<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu rutrum diam, nec consectetur ante. Etiam interdum justo et ante venenatis, eu venenatis justo suscipit. Nulla rhoncus sit amet turpis in malesuada. Proin ultrices aliquet sem, in tristique lectus. Ut ac magna tortor. Phasellus dapibus odio non venenatis consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sed nisl sed sapien posuere porta. Nullam ultricies eros at ultrices placerat. Donec sollicitudin, est ac sollicitudin tempus, turpis felis tristique orci, eget consectetur dolor sem feugiat mi. Vivamus sem ante, interdum quis fringilla at, rutrum scelerisque sem. Curabitur tempus lectus vitae mauris luctus lobortis. Suspendisse potenti. Donec diam arcu, tristique sed erat gravida, suscipit ultrices dui. Maecenas vehicula magna non sodales finibus. Etiam porta nulla in urna feugiat scelerisque. Ut id sollicitudin ligula. Quisque in nunc in enim scelerisque ultrices. Cras nec auctor nulla. Nunc efficitur bibendum orci tincidunt faucibus. Ut imperdiet feugiat ante non posuere. Nunc tellus dui, vestibulum quis lorem vel, vulputate dapibus eros. Curabitur molestie sapien in nibh egestas, at venenatis nisl hendrerit. Nullam pharetra sollicitudin faucibus. Integer mollis maximus est eu cursus. Etiam libero lectus, euismod eu erat in, sodales tincidunt ligula. Morbi ullamcorper massa ac mi cursus malesuada. Vestibulum feugiat fermentum magna, nec facilisis mi. Vestibulum blandit auctor finibus";
	document.getElementById("parrafo1").innerHTML=texto;

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


	//modificamos el icono de persona y damos referencia al link
	elemento=document.getElementById("item1");
	elemento.id="persona";
	elemento.innerHTML="<i class='fa-solid fa-address-card'></i>";
	crea_inserta("a","link1"," Datos","persona");
	document.getElementById("link1").href="#mi-persona";


	elemento=document.getElementById("item2");
	elemento.id="habilidades";
	elemento.innerHTML="<i class='fa-solid fa-brain'></i>";
	crea_inserta("a","link2"," Habilidades","habilidades");
	
	elemento=document.getElementById("link2");
	//elemento.class="nav-link";
	elemento.href="#mis-habilidades";

	//Crea Tittulo y enlista los datos personales
	crea_inserta("h1","mi-persona","Mis Datos","cuerpo");
	crea_inserta("ul","lista-mi-persona","","cuerpo");

	carga_items(6,"lista-mi-persona");
	document.getElementById("item1").innerHTML="Nombre: Clinton Brat Gomez";
	document.getElementById("item2").innerHTML="Edad:\t27 años";
	document.getElementById("item3").innerHTML="Direccion:\t3370 James St";
	document.getElementById("item4").innerHTML="Telef Fijo:\t(868) 266-6163";
	document.getElementById("item5").innerHTML="Telef Cel:\t(111) 222-3344";
	document.getElementById("item6").innerHTML="Correo:\tclinton.gomez@example.com";
	
	//Crera titulos, subtitulos y describe habilidades
	crea_inserta("h1","mis-habilidades","Mis habilidades","cuerpo");
	crea_inserta("h2","","Habilidad1","cuerpo");
	crea_inserta("p","","Explicacion1 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
	crea_inserta("h2","","Habilidad2","cuerpo");
	crea_inserta("p","","Explicacion2 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
	crea_inserta("h2","","Habilidad3","cuerpo");
	crea_inserta("p","","Explicacion3 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
	crea_inserta("h2","","Habilidad4","cuerpo");
	crea_inserta("p","","Explicacion4 bla bla bla bla bla bla bla bla bla bla bla bla bla bla","cuerpo");
}

function linea_tiempo(){
	var cargo,periodo,descripcion,lugar;
	//cerramos el menu desplegable e iniciamos el indice 
	cerrar_menu();

	limpia("lista-indice");
	limpia("cuerpo");

	crea_indice();
	//Ceamos dos listas, una para los tranajos y la otra para los estudios
	crea_inserta("ul","lista-trabajo","","lista-indice");
	crea_inserta("hr","","","lista-indice");
	crea_inserta("ul","lista-estudio","","lista-indice");

	elemento=document.getElementById("lista-trabajo").innerHTML="<i class='fa-solid fa-hammer'></i> Trabajos";
	elemento=document.getElementById("lista-estudio").innerHTML="<i class='fa-solid fa-graduation-cap'></i> Estudios";
	//Cargamos el indice con items representando los años que queremos mostrar, en nuestro caaso son 3 de trabajo y 5 de estudios
	carga_items(3,"lista-trabajo");
	//Creamos los links 

	crea_inserta("a","trabajo1","2019","item1");
	document.getElementById("trabajo1").href="#cargo1";
	crea_inserta("a","trabajo2","2020","item2");
	document.getElementById("trabajo2").href="#cargo2";
	crea_inserta("a","trabajo3","2022","item3");
	document.getElementById("trabajo3").href="#cargo3";
	//modifica id para no confundirlos con los de la lista de estudios
	document.getElementById("item1").id="item-trabajo1";
	document.getElementById("item2").id="item-trabajo2";
	document.getElementById("item3").id="item-trabajo3";

	

	//Repetimos los pasos para crear la lista estudios
	carga_items(5,"lista-estudio");

	crea_inserta("a","lugar1","Primaria","item1");
	document.getElementById("lugar1").href="#estudio1";
	crea_inserta("a","lugar2","Secundaria","item2");
	document.getElementById("lugar2").href="#estudio2";
	crea_inserta("a","lugar3","Universidad","item3");
	document.getElementById("lugar3").href="#estudio3";
	crea_inserta("a","lugar4","Curso 1","item4");
	document.getElementById("lugar4").href="#estudio4";
	crea_inserta("a","lugar5","Curso 2","item5");
	document.getElementById("lugar5").href="#estudio5";




	//Creamos los titulos, subtitulos y las descripcciones de los cargos
	for (var i = 1; i <= 3; i++) {
		crea_inserta("h2","cargo"+i,"","cuerpo");
		crea_inserta("h4","periodo1-"+i,"","cuerpo");
		crea_inserta("p","descripcion1-"+i,"","cuerpo");
	}
	//Modificamos el contenido de los cargos perioddos y descripciones
	cargo="Mantenimiento - Biblioteca UNSa";
	periodo="Marzo - Julio (2019)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("cargo1").innerHTML=cargo;
	document.getElementById("periodo1-1").innerHTML=periodo;
	document.getElementById("descripcion1-1").innerHTML=descripcion;

	cargo="Auxiliar - Programacion  Numerica";
	periodo="Agosto - Noviembre (2020)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("cargo2").innerHTML=cargo;
	document.getElementById("periodo1-2").innerHTML=periodo;
	document.getElementById("descripcion1-2").innerHTML=descripcion;

	cargo="Desarrollador Web - 'Techman'";
	periodo="Abril - Septiembre (2022)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("cargo3").innerHTML=cargo;
	document.getElementById("periodo1-3").innerHTML=periodo;
	document.getElementById("descripcion1-3").innerHTML=descripcion;


	//Creamos los lugares, periodos y otros detalles 
	for (var i = 1; i <= 5; i++) {
		crea_inserta("h2","estudio"+i,"","cuerpo");
		crea_inserta("h4","periodo2-"+i,"","cuerpo");
		crea_inserta("p","descripcion2-"+i,"","cuerpo");
	}

	lugar="Escuela Publicca Nº 1112 (Primaria)";
	periodo="2002 - 2009";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("estudio1").innerHTML=lugar;
	document.getElementById("periodo2-1").innerHTML=periodo;
	document.getElementById("descripcion2-1").innerHTML=descripcion;

	lugar="Escuela Publica Nº 3312 (Secundaria)";
	periodo="2010 - 2016";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("estudio2").innerHTML=lugar;
	document.getElementById("periodo2-2").innerHTML=periodo;
	document.getElementById("descripcion2-2").innerHTML=descripcion;

	lugar="Universidad Universal (Universidad)";
	periodo="2017 - En curso";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("estudio3").innerHTML=lugar;
	document.getElementById("periodo2-3").innerHTML=periodo;
	document.getElementById("descripcion2-3").innerHTML=descripcion;

	lugar="1000 Programadores Salteños (Curso)";
	periodo="Agosto - Octubre (2019)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("estudio4").innerHTML=lugar;
	document.getElementById("periodo2-4").innerHTML=periodo;
	document.getElementById("descripcion2-4").innerHTML=descripcion;

	lugar="Argentina Programa (Curso)";
	periodo="Septiembre - Diciembre (2021)";
	descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet rhoncus nisi. Fusce ultrices lorem vel mi pretium efficitur. Nulla nec quam risus. Fusce venenatis ante nulla, at maximus ligula porttitor eu. In hendrerit, dolor eu elementum laoreet, sem risus pretium ante, vitae rhoncus lorem nulla quis nibh. Proin turpis sem, sagittis eu volutpat sed, efficitur in augue. Morbi tristique ipsum mauris, ut suscipit est congue vitae. Maecenas convallis tortor sit amet ligula sagittis pulvinar. Aliquam et fermentum tortor. Proin sollicitudin ligula id commodo posuere. Donec bibendum eros sit amet justo tristique mollis. Sed non fringilla velit, a ullamcorper nunc. Donec dictum suscipit libero in vehicula.";
	document.getElementById("estudio5").innerHTML=lugar;
	document.getElementById("periodo2-5").innerHTML=periodo;
	document.getElementById("descripcion2-5").innerHTML=descripcion;



}


function contactar(){
	var texto;

	//Cerrar menu, limpia indice y cuerpo, por ultimo se modifica convenientemente 
	cerrar_menu();
	limpia("lista-indice");
	limpia("cuerpo");
	crea_indice();

	//Se agregaran dos items, para contactarse por correo o por wpp
	carga_items(2,"lista-indice");
	
	//Se cargan los links
	document.getElementById("item1").innerHTML="<i class='fa-solid fa-envelope'></i>";
	crea_inserta("a","envia-correo"," Enviar Correo","item1");
	document.getElementById("item1").href="#correo";
	document.getElementById("item2").innerHTML="<i class='fa-brands fa-square-whatsapp'></i>";
	crea_inserta("a","envia-wpp"," Enviar Wpp","item2");
	document.getElementById("item2").href="#wpp";

	//Ponemos un link directo para chatear con el correo de la persona
	document.getElementById("envia-correo").href="https://mailto:clinton.gomez@example.com?subject=Contacto-Sugerencia";
	document.getElementById("envia-correo").target="_blank";

	//Ponemos un link directo para chatear con el numero de la persona (111) 222-3344
	document.getElementById("envia-wpp").href="https://api.whatsapp.com/send/?phone=1112223344";
	document.getElementById("envia-wpp").target="_blank";

	crea_inserta("h2","contacto-sugerencia","Contactame o Sugiere Cambios","cuerpo");
	crea_inserta("p","parrafo","","cuerpo");
	crea_inserta("p","parrafofin","","cuerpo");
	

	texto="Enviame un correo o un Wpp por medio de los enlaces ubicados en el Indice, Estare agradecido y dispuesto a responder lo mas antes posible. Desde ya te agradezco la visita a este CV Onnline y espero hayas encontrado lo que buscas. Espero tus mensajes.";
	document.getElementById("parrafo").innerHTML=texto;

	document.getElementById("parrafofin").align="center";	
	document.getElementById("parrafofin").innerHTML="<i class='fa-solid fa-cat'></i>  Gracias por ver mi CV Onnline  <i class='fa-solid fa-dog'></i>";	




	/**

	//Se creara un formulario
	crea_inserta("form","formulario","","cuerpo");
	//creamos un titulo para el formulario y un parrafo indicativo
	crea_inserta("h2","correo","Enviame un correo y contactame","formulario");
	crea_inserta("p","","En el formulario hay campos oobligatorios *","formulario");

	
	crea_inserta("p","parrafo1","","formulario");
	crea_inserta("label","etiqueta1","","parrafo1");
	crea_inserta("span","contenido1","","etiqueta1");
	crea_inserta("strong","strong1","","etiqueta1");
	crea_inserta("abbr","abbr1","*","strong1");
	crea_inserta("select","entrada1","","parrafo1");
	crea_inserta("option","contacto","Contacto","entrada1");
	crea_inserta("option","sugerencia","Sugerencia","entrada1");

	//Asignamos los atributos correspondientes
	document.getElementById("parrafo1").for=("entrada1");
	document.getElementById("abbr1").title="required";
	document.getElementById("entrada1").selected="true";

	//El ultimo elemento sera un text area para el msj
	crea_inserta("p","parrafo2","","formulario");
	crea_inserta("label","etiqueta2","","parrafo2");
	crea_inserta("span","contenido2","","etiqueta2");
	crea_inserta("strong","strong2","","etiqueta2");
	crea_inserta("abbr","abbr2"," *","strong2");
	crea_inserta("textarea","mensaje","","parrafo2");
	document.getElementById("etiqueta2").for=("entrada2");
	document.getElementById("abbr2").title="required";
	document.getElementById("mensaje").name="Mensaje";
	document.getElementById("mensaje").cols="50";
	document.getElementById("mensaje").rows="5";
	document.getElementById("mensaje").required="true";

	//Asignamos contenido para facilitar la interaccion con el formulario
	document.getElementById("contenido1").innerHTML="  Asunto ";
	document.getElementById("contenido2").innerHTML="Mensaje ";


	//Agregamos dos botones
	crea_inserta("p","parrafo3","","formulario");
	crea_inserta("input","boton1","","parrafo3");
	crea_inserta("input","boton2","","parrafo3");


	document.getElementById("parrafo3").align="center";
	document.getElementById("boton1").type="reset";
	document.getElementById("boton1").value="Borrar";
	document.getElementById("boton2").type="submit";
	document.getElementById("boton2").value="Enviar";
	

	document.getElementById("formulario").method="POST";
	document.getElementById("formulario").action="mailto:cristianprogramadorunsa@gmail.com?subject="+asunto;
	document.getElementById("formulario").enctype="text/plain";
	document.getElementById("formulario").target="_blank";

	//cada vez que cambie de asunto se hara un cambio en el action del formulario
	document.getElementById("entrada1").addEventListener("change",
		function(){
			var seleccion=document.getElementById("entrada1");
			asunto=seleccion.options[seleccion.selectedIndex].innerText;
			document.getElementById("formulario").action="mailto:cristianprogramadorunsa@gmail.com?subject="+asunto;
	
	});	
	*/

	

}



