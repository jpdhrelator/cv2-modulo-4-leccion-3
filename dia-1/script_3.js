let fila = ["Ana", "Beto", "Carla"];

fila[3]="Jacinto";

fila.push("Koke");

fila.unshift("Maximo")

//console.log(fila);



let mascotas = ["pulga", "kity", "juanin","chupete","el negro","floripondia",'nina', 'petunia' , 'toffee'];

console.log(mascotas);
console.log("largo inicial",mascotas.length);

let ultimo=mascotas.pop();
console.log("ultimo:",ultimo);

let primer=mascotas.shift();
console.log("primer:",primer);


let eliminados = mascotas.splice(1,3);
console.log("eliminados:",eliminados);


console.log("largo final",mascotas.length);
console.log(mascotas);