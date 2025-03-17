
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigos = []; // Array vacio

// función para agregar amigos
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Elimina espacios 

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agregar al array
    actualizarLista(); // Mostrar en pantalla
    inputNombre.value = ""; // Limpiar el input
}

// Función para actualizar la lista 
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un nombre
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la pantalla
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong> </p>`;

    // Vaciar la lista y el array después del sorteo
    amigos = [];
    listaAmigos.innerHTML = "";
}