function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target) });//boton no se muevde de manera random

btnSi.addEventListener('click', function(e){
    alert('sabia que dirias que si, casemonos y tengamos hijos ')

    divModoSexo.style.display = 'block';
    const cancion = new Audio ('img\\modo_hot.mp3');//ruta del audio
    cancion.play();
});

