let salir = false;


do {    
    //
    let inputUsuario=prompt(`Ingresa un opción del menu:
            1) Sumar Numeros
            2) Despedir
            3) Salir
        `);

    if(inputUsuario=="1"){
        console.log("Hola Mundo"); 
        
        const nro1=prompt("Ingrese el primer nro");
        const nro2=prompt("Ingrese el segundo nro");

        const resultado = parseInt(nro1) + parseInt(nro2);
        alert(`El Resultado es ${resultado}`)
    }else if(inputUsuario =="2"){
        console.log("Chao Mundo Mundo");  
    }else if(inputUsuario =="3"){
        salir=true; 
        console.log('Programa Terminado');        
    }else{
        alert('Ingrese un opcion válida')
    }
}while (!salir)
