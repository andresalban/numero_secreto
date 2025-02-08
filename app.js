
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento,texto) {
    let  elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML=texto
    return
}

function verificarIntento() {
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(typeof(numeroDeUsuario));
    
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
        
    console.log(numeroDeUsuario===numeroSecreto);
    return
}

function generarNumeroSecreto() {
   return Math.floor(Math.random()*10)+1
    

}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número de 1 a 100');