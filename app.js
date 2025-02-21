let numeroSecreto=0;
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número✅ en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "el número secreto es menor⬇️");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor⬆️");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", "Indica un número de 1 a 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //generar el número aleatorio
  //inicializar el número de intentos
  condicionesIniciales();

  //desahabilitar el boton de nuevo juevo
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
