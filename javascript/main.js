// let edad
// edad = prompt ('Ingrese su edad')
//     if (edad <18){
//         alert ('Eres menor de edad')//Si es menor de edad me gustaria que se quede en un loop y que no lo permita avanzar de ese punto.

//     }else (edad > 18)
//         alert ('Podrás seleccionar los productos que desees comprar y luego abonar')
//         alert('Hola! Bienvenido a Mondo Vino')

let product = []
let total = 0;
let edad 

function add(product, price){
    console.log(product,price)
}    


// let edad

// do{
//     edad = prompt ('Ingrese su edad:   ')
// }while ((edad.trim() =="") || (edad<18)){
//     edad = alert ("PROHIBIDA SU VENTA A MENORES DE 18 AÑOS")        
// } 




// for (let i = 1; i <= 100; i++){
//     let edad= prompt("Ingrese su edad:   ");
//     if ((edad.trim() =="") || (edad<18)){
//         edad = alert ("PROHIBIDA SU VENTA A MENORES DE 18 AÑOS")        
//     }else (edad > 18) 
//     alert ('Podrás seleccionar los productos que desees comprar y luego abonar')
//     alert('Hola! Bienvenido a Mondo Vino') 


//     }


// for (let i = 1; i <= 100; i++){
//     edad = prompt ('Por favor ingrese su edad')
//     if (edad.trim() ==""){
//         edad = alert ("Por favor ingrese su edad")        
//     }else if((edad<18)){
//         alert ('PROHIBIDA SU VENTA A MENORES DE 18 AÑOS')
//     }else ((edad>=18))
//         alert('Bienvenido a Mondo Vino!')
    

// }

for (let i = 1; i >= 100; i++){
    edad = prompt ('Por favor ingrese su edad')
    if (edad.trim() ==""){
        edad = prompt ("Por favor ingrese su edad")
    
    }else if ((edad>=18)){
        alert('Bienvenido a Mondo Vino!')
        break

    }else ((edad<18))
    alert ('PROHIBIDA SU VENTA A MENORES DE 18 AÑOS')

    
}
       
    

    

        

