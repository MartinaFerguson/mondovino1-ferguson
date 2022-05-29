let products = []
let total = 0;
let edad


function add(product, price){
    console.log(product,price);
    products.push(products);
    total = total + price;
    document.getElementById('pay'). innerHTML = `Pagar $${total}`
}    

function totalProducts(){
   alert (products.join (`$${total}\n`)) //En este punto no logrè que solo muestre el valor del producto seleccionado y el tota
   // entonces muestra el total repetido la cantidad de productos que selecciono. Siendo que en la consola puedo ver la cantidad de productos seleccionados. 
}

for (let i = 1; i < 100; i++){
    edad = prompt ('Por favor ingrese su edad')
    if (edad.trim() ==""){
        edad = prompt ("Por favor ingrese su edad")
    

    }else if (edad>=18){
        alert('Bienvenido a Mondo Vino!')
        break

    }else
    alert ('PROHIBIDA SU VENTA A MENORES DE 18 AÑOS')
}
       

    

    

        

