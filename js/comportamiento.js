import info from './recursos/info.json' assert {tyoe:'JSON'};
console.log(info);





document.getElementById("inicio").addEventListener('click',pagina_inicio());
document.getElementById("item1").addEventListener('click',modifica("item1",));





function pagina_inicio(){
	document.getElementById('cargo').innerHTML="Bienvenido/a a 'Mi CV Onnline' ";
	document.getElementById('tiempo-cargo').innerHTML="Desarrollado por Franco Cristian-Argentina Programa";
	document.getElementById('descripcion-cargo').innerHTML="Bienvenido/a a 'Mi CV Onnline' ";
}
