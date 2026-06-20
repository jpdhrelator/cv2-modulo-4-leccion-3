/*
Crea un menu que se depliege en la consola
que permite ingresar 2 semanas y en cada una 
deben registrar 3 dias, luego del ingreso
deben indicar cual fue el total de las ventas
y el promedio de venta de las 2 semanas
*/
let ventas= [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

let opcion="0";
let ventasTotalizadas=0;
let nroTotalVentas=0;
do{
    opcion= prompt(`
            --- Menu ---
            0. salir;
            1. ingresar ventas
        `);

    if(opcion =="1"){
        for (let i = 0; i < ventas.length; i++) {
            alert(`Ingresando ventas Semana ${i+1}`)
            for (let j = 0; j < ventas[i].length; j++) {
                let ventaStr= prompt(`
                    Ingrese Venta dia ${j+1}
                    `);
                let ventaInt= parseInt(ventaStr);
                ventas[i][j]=ventaInt;
                ventasTotalizadas+=ventaInt;
                nroTotalVentas++;
            }
            
        }

        console.log(`El Total de Ventas fue ${ventasTotalizadas}`);
        console.log(`El Promedio de Ventas fue ${ventasTotalizadas/nroTotalVentas}`);
        


    }    

}while(opcion != "0");