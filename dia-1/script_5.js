let edades = [15, 22, 17, 30, 12, 18,56,12,58,41,22,10];
/*
let mayores = edades.filter((edad)=>{
    return edad >= 18;
});
*/
let mayores = edades.filter((edad)=> edad >= 18);
console.log("mayores",mayores);

let menores = edades.filter((edad)=> edad < 18);
console.log("menores:",menores);

console.log("La cantidad de Mayores es:",mayores.length);
console.log("La cantidad de Menores es:",menores.length);
