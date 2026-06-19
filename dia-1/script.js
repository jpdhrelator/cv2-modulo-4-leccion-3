let numeros = [4, 9, 15, 6, 21, 8,25,50,28];


for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if(element % 5 === 0){
        console.log("multiplo de 5->",element);
        break;
    }
}
console.log("--------------------");

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if(element % 2 === 0)continue
    console.log("impares ->",element);
}