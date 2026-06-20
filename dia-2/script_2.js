let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
  
for (let i = 0; i < matriz.length; i++) {
    let fila =matriz[i];
    let cantidadDeColumnas= fila.length;

    for (let j = 0; j < cantidadDeColumnas; j++) {
        let columna=matriz[i][j];

        console.log(`[${i}][${j}]= ${columna}`);        
    }
}


for (let tabla = 1; tabla <= 5 ; tabla++) {
    console.log(`--- Tabla del ${tabla} ---`);    
    for (let nro = 1; nro <= 10; nro++) {
        console.log(`${tabla} x ${nro} = ${tabla*nro}`);       
        
    }
    
}