let ventas = [1000, 2500, 4000, 1500];



let total= ventas.reduce((acumulador,venta)=>{
        console.log("acumulador:",acumulador,"venta:",venta);        
        return acumulador + venta;
});

console.log('total',total);
