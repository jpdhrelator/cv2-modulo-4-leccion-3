
//  for (inicio ; condición ; incremento)
 /*   for (let i=0; i<10     ; i++){
        console.log("Iterando",i);        
    }
*/

/*
let invitados = ["Lucía", "Pedro", "Marta", "Juan"];

for(let i=0 ; i < invitados.length; i++ ){
    console.log(`Obteniendo el indice ${i} :${invitados[i]}`);
}
*/

/*
let notas = [4.5, 6.2, 3.8, 7.0, 5.5];
let suma = 0; 
let aprobados = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
    if(notas[i] >= 4.0){
        aprobados++;
    }
    
}

console.log("Promedio total:", suma/notas.length);     
console.log("Aprobados:", aprobados, "de", notas.length);

*/
console.log("-----------FOR OF---------------------");
let colores = ["rojo", "verde", "azul"];

for (let color of colores){
    
    console.log("Color-->",color);
    
}
console.log("-----------FOR IN---------------------");

for (let indice in colores){
    
    console.log("Color-->",indice);
    
}

let obtAuto={
    marca:"Toyota",
    modelo:"Yaris"
}

for (let indice in obtAuto){
    
    console.log("atributo-->",indice);
    
}