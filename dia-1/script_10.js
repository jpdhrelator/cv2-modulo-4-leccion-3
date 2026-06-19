let a = ["rojo", "verde", "azul"];
let b = ["azul", "amarillo", "verde"];

let union = [...new Set([...a,...b])];
console.log("union:",union);


let comunes = a.filter( (x) => b.includes(x));
console.log("comunes:",comunes);


let diferencia = [...a.filter( (x) => !b.includes(x)),...b.filter( (x) => !a.includes(x))];
console.log("diferencia:",diferencia);


//let todos = a.concat(b);
let todos = [...a , ...b];
console.log("Concatenación:", todos); 