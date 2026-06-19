let precios = [1000, 2500, 4000];
const IVA=1.19;
console.log("precios: ",precios);
/*
let preciosConIva= precios.map((precio)=>{
        return precio * IVA;
});*/

let preciosConIva= precios.map((precio) => precio * IVA);

console.log("preciosConIva: ",preciosConIva);


let preciosConIvaYSimbolo= preciosConIva.map((precio) => "$"+precio );

console.log("preciosConIvaYSimbolo: ",preciosConIvaYSimbolo);