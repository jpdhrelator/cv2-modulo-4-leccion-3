let ventas = [
  [100, 200, 150, 120, 130],   // semana 1
  [300, 250, 400, 350, 360]    // semana 2
];
let total = 0;

for (let nroSemana = 0; nroSemana < ventas.length; nroSemana++) {
       
    const semana = ventas[nroSemana];
    console.log(`semana: ${nroSemana+1} (indice:${nroSemana})`);
    
    for (let nroDia = 0; nroDia < semana.length; nroDia++) {
        
        const dia = semana[nroDia];
       // console.log(`dia: ${nroDia+1} (indice: ${nroDia}) = ${dia}`);
        console.log(`dia: ${nroDia+1} (indice: ${nroDia}) = ${ventas[nroSemana][nroDia]}`);

       // total+= dia;

        total += ventas[nroSemana][nroDia]
    }
}

//console.log("Total Vendido",total);
