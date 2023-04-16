/* CICLOS FOR / WHILE / DO WHILE */



/* 01-Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado.
 Los números se separarán por comas.  */ 

 const PromptSync = require("prompt-sync")();

 function valorEntero(){
    let contador = parseInt(PromptSync("Ingresa un valor entero"));
    let numeros = "";
    for (let i=0; i <=contador; i++){
         
        numeros += i + ",";

    }
    console.log(numeros);
 }

valorEntero()


/* 02-Se trata de que dado un número entero el script muestre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0. */

function cuentaAtras(numero){
    let numeros = "";
    for (let i= numero; i >=0; i--){

        numeros += i + ",";
    
}
    console.log("Cuenta atras: "+numeros);
}

cuentaAtras(7)


/* 03-Este script debe escribir la tabla de multiplicar del número que la persona teclee.
 La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n" */

function multiplicar(){
let num =  parseInt(PromptSync("Ingrese un numero para realizar su tabla: "));

for (let i = 0; i <=10; i++){
    console.log(num+ " x " +i+ " = " +num*i)
 }
 
}
 
multiplicar()


/* 04-Este script la persona deberá teclear una letra y un número, y el programa mostrará una cadena formada
 por la letra repetida el número que haya tecleado. */

 function letraRepetida(){
    let letra = PromptSync("Decime una letra: ")
    let num = parseInt(PromptSync("Decime un numero entero: "))
    let resultado = letra;
    for (i=1;i<=num;i++){
        console.log(resultado = resultado + letra);
    }

 }
 letraRepetida()


 /* 05 Programa un script que pida a una persona que teclee 4 números (uno cada vez).
  Con esos números el programa deberá calcular la media aritmética.
   O sea la suma de los 4 números dividida entre 4 */
function mediaAritmetica(num1,num2,num3,num4){
    
    let suma = num1+num2+num3+num4
    let promedio = suma/4;
    
    console.log("La media aritmetica es: "+promedio);
    
}
mediaAritmetica(5,4,6,7)

 /* 05 Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado.
  Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  */

   function listaNumeros(){
    const valorEntero = parseInt(PromptSync("Ingrese un valor entero:"));
    let lista = [];
    let i = 0;
     while (i <= valorEntero) {
        lista.push(i);
         i++;
    }

    console.log(lista.join(", "));
    //uso console.log porque cuando uso alert me dice que no está definida.
   } 
   listaNumeros()

  /* 06-Se trata de pedir a la persona que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número */

   function rango(){
    let valor = parseInt(PromptSync("ingrese un valor entre 1 y 5:"))
    if (valor < 1 || valor > 5) {
        valor = PromptSync("Reingrese el número pero de acuerdo a los parametros establecidos.")
     }
    }
    rango()
/* 07 Escribir un script que pida una contraseña. Si coincide le devolverá el mensaje "Acceso concedido"
 y si no coincide le deolverá el mensaje "Acceso Denegado".
 Solo falla tres veces se emitirá el mensaje "Alerta, intruso" */

     function contraseña(){
    let password = parseInt(PromptSync("Ingrese su contraseña:"))
    let contador = 0;
    let usuario = {
        contraseña : "Hola123"
    }
    while (contador<=3) {
        ;
        if (password == usuario.contraseña){
            console.log("Acceso concedido:")
        }else {
            console.log("Acceso denegado:")
        }
        console.log("Reingrese la contraseña:")
    }
        contador++

    if (contador > 3){
        console.log("Alerta, intruso:")
    }else{
        console.log("Acceso concedido:")
        }
    }
    contraseña()

    //8 Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
    /* 
    0-3: Muy deficiente
    3-5: Insuficiente
    5-6: Suficiente
    6-7: Bien
    7-9: Notable
    9-10: Sobresaliente */

    function nota(){
        let numero = parseInt(PromptSync("Ingrese su nota:"))
        
        while(numero>=0 && numero<=10){
            if (numero>=0 && numero<3){
                console.log("Muy deficiente:")
                }else 
            if (numero>=3 && numero<5){
                console.log("Insuficiente:")
            }else 
            if(numero>=5 && numero<6){
                console.log("suficiente:")
            }else
            if(numero>=6 && numero<7){
                console.log("Bien:")
            }else 
            if (numero>=7 && numero<9){
                console.log("Notable:")
            }else 
            if (numero>=9 && numero<=10){
                console.log("Sobresaliente:")
            }
        }
     }
    nota()
   

 //9     Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
 //Retornar el valor final.

 function aumento(numero, limite) {
    
    let contador = 0;
    do{
        contador = numero + 5 
        limite ++;
    }while(limite<=8)
    console.log("Valor final: "+contador)
  }

aumento(5)
 /* 10 Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir.
  Usa un bulce do..while y la ventana alert para los mensajes */
 /* El usuario teclea b, el programa vuelve a pedirme que teclee una letra
*/

function teclear() {
    let letra = parseInt(PromptSync("Ingresa la letra A: "))
    do {
        console.log("La letra introducida no es la correcta.");
        //uso console.log porque cuando uso alert me dice que no está definida.
        letra = PromptSync("Reingrese la letra.");
    } while (letra != "A");
        console.log("La letra es correcta :)")
        //uso console.log porque cuando uso alert me dice que no está definida.
}

teclear()