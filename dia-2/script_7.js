

let salir = false;


while (!salir) {    
    //
    let inputUsuario=prompt(`Ingresa un opción del menu:
            1) Saludar
            2) Despedir
            3) Salir
        `);

    if(inputUsuario=="1"){
        console.log("Hola Mundo");        
    }else if(inputUsuario =="2"){
        console.log("Chao Mundo Mundo");  
    }else if(inputUsuario =="3"){
        salir=true; 
        console.log('Programa Terminado');        
    }else{
        alert('Ingrese un opcion válida')
    }
    //console.clear();
}

