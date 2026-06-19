let carrito = ["pan", "leche", "huevos", "leche"];
console.log(carrito);

console.log("Cantidad de Elementos:",carrito.length );
console.log("Ultimo indice:", carrito.length -1 );


console.log("Tienes leche el Carro", carrito.includes("leche"));
console.log("Tienes café el Carro", carrito.includes("café"));


console.log("cual es la primera posicion de Leche:",carrito.indexOf("leche"));
console.log("cual es la última posicion Leche:",carrito.lastIndexOf("leche"));

console.log("cual es la primera posicion de café:",carrito.indexOf("café"));