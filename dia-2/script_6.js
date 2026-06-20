let meta= 10000;
let ahorro= 0;
let semana= 0;

while(ahorro < meta){
    ahorro += 200;
    semana++;
    console.log(` Semana: ${semana} $ ${ahorro}`);   
}

console.log("🎯 Meta alcanzada en " + semana + " semanas");