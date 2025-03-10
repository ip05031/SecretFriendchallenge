// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = new Array();

function agregarAmigo(){

    console.log("Agregando amigo");

    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value;
    amigos.push(nombre);
    console.log("Se agrega a :["+ nombre+"]");
    inputNombre.value="";
    inputNombre.focus();
    imprimirAmigos();
}

function imprimirAmigos(){

    let texto = "";
    amigos.forEach(element => {
        texto += "<li>"+element+"</li>"
    });

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = texto;

}

function sortearAmigo(){
    let indice = Math.floor(Math.random() * amigos.length);
        
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto es : " + amigos[indice];

}