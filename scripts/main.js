// //!Empezamos Saludando

alert("Hola Bienvenido 👋🏻 , Calculemos las calorias adquiridas a la semana 📅");

//  //? Pedimos el nombre del usuario

let nombre = prompt("Empezemos ingresando tu nombre por favor ✍");

//! Creamos un array para almacenar las calorías adquiridas cada día de la semana
let caloriasSemana = [];

//! Función para capturar las calorías adquiridas cada día de la semana
function capturarCalorias() {
  for (let i = 0; i < 7; i++) {
    let calorias = prompt(`Ingresa las calorías adquiridas el día ${i + 1}:`);
    caloriasSemana.push(parseInt(calorias));
  }
}

//! Función para calcular el total de calorías adquiridas a la semana
function calcularTotalCalorias() {
  let totalCalorias = caloriasSemana.reduce((acc, calorias) => acc + calorias, 0);
  return totalCalorias;
}

//! Función para e mcontrar el día con más calorías adquiridas
function encontrarMaxCalorias() {
  let maxCalorias = Math.max(...caloriasSemana);
  let diaMaxCalorias = caloriasSemana.indexOf(maxCalorias) + 1;
  return diaMaxCalorias;
}

//! Función para filtrar los días con calorías superiores a un valor dado
function filtrarCaloriasSuperiores(valor) {
  let caloriasSuperiores = caloriasSemana.filter(calorias => calorias > valor);
  return caloriasSuperiores.length > 0 ? caloriasSuperiores : ['Ninguno'];
}

//? Capturamos las calorías adquiridas cada día de la semana
capturarCalorias();

//? Calculamos el total de calorías adquiridas a la semana
let totalCalorias = calcularTotalCalorias();

//? Encontramos el día con más calorías adquiridas
let diaMaxCalorias = encontrarMaxCalorias();

//? Filtramos los días con calorías superiores a 1500
let caloriasSuperiores = filtrarCaloriasSuperiores(1500);

//* Mostramos los resultados :
alert(`${nombre} El total de calorías adquiridas esta semana es de: ${totalCalorias} ✍`);
alert(`El día con más calorías adquiridas fue el Día ${diaMaxCalorias} ✍`);
alert(`Los días que consumiste calorías superiores a 800kcal: fue de ${caloriasSuperiores.join(',')} ✍`);

//? Verificamos si el total de calorías es superior a 12000
if (totalCalorias > 12000) {
  alert('te haz excedido en el consumo de calorias semanales, debes disminuir un poco si quieres tener una vida saludable.');
} else {
  alert('Muy bien hecho, sigue así');
}

//? Nos despedimos
alert(`Gracias ${nombre} hasta luego!!`)