/*

1. Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, 
que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, 
dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). 
Si el parámetro de la operación no es válido que mande un error personalizado a la consola.

*/

function ejercicioUno(a, b, operation) {
  switch (operation) {
    case "suma":
      return console.log(a + b);
    case "resta":
      return console.log(a - b);
    case "multiplicacion":
      return console.log(a * b);
    case "division":
      return console.log(a / b);
    default:
      console.error(`la operacion ${operation} no es valida`);
  }
}

//EJECUCION DE FUNCIONES
ejercicioUno(12, 5, "suma")


/*

2. Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.

*/

function ejercicioDos(a = 0, b = 0) {
    let nums=[];
   for(let i = a; i <=b; i++) {
   // console.log(i);
    if(i % 2 === 0) nums.push(i);
   }
   console.log(nums);
}

//EJECUCION DE FUNCIONES
ejercicioDos(2, 10);