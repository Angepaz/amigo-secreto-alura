// El principal objetivo de este desafío es fortalecer tus habilidades
let amigos = [];

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value.trim(); // quitamos espacios extra
  
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    // Verificar si el nombre ya existe (ignorando mayúsculas y minúsculas)
    let existe = amigos.some(a => a.toLowerCase() === amigo.toLowerCase());

    if (existe) {
      alert("Ese nombre ya fue ingresado.");
    } else {
      amigos.push(amigo);

      let li = document.createElement("li");
      li.textContent = amigo;
      document.getElementById("listaAmigos").appendChild(li);
    }

    // limpiar la caja de texto
    document.getElementById("amigo").value = "";
  }
}

function mostrarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista

  amigos.forEach(function(amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    resultado.textContent = "No hay amigos para sortear.";
  } else {
    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];
    resultado.textContent = "🎉 El amigo sorteado es: " + ganador;
  }
}

