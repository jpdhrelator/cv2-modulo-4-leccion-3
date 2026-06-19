let etiquetas = ["html", "css", "javascript"];
console.log(etiquetas);

let textoConComas=etiquetas.join(", ");
console.log("textoConComas:",textoConComas);


let textoConNumeral=etiquetas.join("#");
console.log("textoConNumeral:",textoConNumeral);

let textoConGuion=etiquetas.join("-");
console.log("textoConGuion:",textoConGuion);

// split de string

let fraseColores ="rojo verde azul";
let arregloColores= fraseColores.split(" ");
console.log(arregloColores);
