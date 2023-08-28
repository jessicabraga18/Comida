'use strict'

const comida = document.querySelector('#comida');
const botoesFood = document.getElementById('botoesFood');


const statusFood = (tipo) => {
    choice[tipo.target.id]();
}

const choice = {
    'comer':    () => comida.src = '/img/pratoSujo.jpg',
    'nãoComer': () => comida.src = '/img/pratoComida.jpg',
}

const botaoEscovar = () => {
    
    /*
    const brush = document.createElement("div"); 
    brush.id = "brush";
    const onBrush = document.createElement("button");
    onBrush.innerHTML = "Escovar";
    brush.appendChild(onBrush); 
    const novaDiv = document.body;
    novaDiv.appendChild(brush);
    */
}


botoesFood.addEventListener('click', statusFood);
