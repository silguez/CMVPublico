// EJERCICIOS CON ARRAYS

// pasos: 
// crear el Array 
// genenara 7 elemoentos de forma aleatoria entre 1 y 7
// pedir por pantalla el metodo de ordenamiento: 
// 1- mayor a menor 
// 2- menor a mayor 
// mostrar el array ordenado

let nArray = [];
let numeros = 7;

function llenar(){

    while(nArray.length < numeros){
        for (let i = 0; i < numeros; i++) {
            nArray[i] = Math.floor(Math.random()*7) +i;
        }
    }
}

llenar();

function descendente(){ 
    document.getElementById("des").innerHTML = nArray.sort();
}

function ascendente(){
    document.getElementById("asc").innerHTML = nArray.reverse();
}