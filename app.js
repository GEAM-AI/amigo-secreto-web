// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Declaración de variables globales
let amigos = []; // Array para almacenar los nombres de los amigos
const listaAmigos = document.getElementById('listaAmigos'); // Elemento ul donde se mostrará la lista de amigos
const resultado = document.getElementById('resultado'); // Elemento ul donde se mostrará el resultado del sorteo
const inputAmigo = document.getElementById('amigo'); // Elemento input donde el usuario ingresa el nombre del amigo

// 2. Función para agregar amigos
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor del input y eliminar espacios en blanco al inicio y al final

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre."); // Mostrar una alerta si el campo está vacío
        return; // Detener la ejecución de la función
    }

    amigos.push(nombreAmigo); // Agregar el nombre al array de amigos
    inputAmigo.value = ""; // Limpiar el campo de entrada
    actualizarListaAmigos(); // Actualizar la lista de amigos en la página
}

// 3. Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const nuevoElementoLista = document.createElement('li'); // Crear un nuevo elemento de lista (li)
        nuevoElementoLista.textContent = amigo; // Establecer el texto del elemento de lista con el nombre del amigo
        listaAmigos.appendChild(nuevoElementoLista); // Agregar el elemento de lista a la lista en la página
    }
}

// 4. Función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agregue amigos a la lista antes de sortear."); // Mostrar una alerta si no hay amigos en la lista
        return; // Detener la ejecución de la función
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio dentro del rango del array
    const amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre del amigo usando el índice aleatorio

    resultado.innerHTML = `¡El amigo secreto es: <span>${amigoSorteado}</span>!`; // Mostrar el resultado en la página
}


