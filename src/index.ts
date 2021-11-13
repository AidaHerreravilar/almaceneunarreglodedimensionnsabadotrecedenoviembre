//EJERCICIO 1: ALAMACENE EN UN ARREGLO DE DIMENSIÓN N NÚMEROS (LA CANTOIDAD ES INGRESADA POR EL USUARIO).
//MUESTRE CUÁNTOS NÚMEROS SON POSITIVOS, CUÁNTOS NEGATIVOS Y CUÁNTOS CEROS HAY.

let dimension: number = Number(prompt("ingreso dimension"));
let numerosIngresados: number[] = new Array(dimension);
let cantPositivos: number = 0;
let cantNegativos: number = 0;
let cantCeros: number = 0;

for (let index = 0; index < dimension; index++) {
  numerosIngresados[index]= Number(prompt("ingreseNumeros");
  if (numerosIngresados[index] > 0) {
    cantPositivos++;
  } else if (numerosIngresados[index] < 0) {
    cantNegativos++;
  } else if (numerosIngresados[index] === 0) {
    cantCeros++;
  }
}

console.log("positivos" + cantPositivos);
console.log("negativos" + cantNegativos);
console.log("ceros" + cantCeros);
