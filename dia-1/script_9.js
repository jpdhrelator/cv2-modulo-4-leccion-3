let nombres = ["Carla", "Ana", "Beto", "Alicia"];
//console.log("arreglo normal",nombres);

nombres.sort();
//console.log("arreglo ordenado",nombres);

nombres.reverse();
//console.log("arreglo enreversa",nombres);

let numeros = [10, 2, 1, 20, 3];
//numeros.sort();
console.log("arreglo original",numeros);

//numeros.sort((a,b) => a - b); //Ascendente
numeros.sort((a,b) => b - a); // Descendente

console.log("arreglo ordenado",numeros);

