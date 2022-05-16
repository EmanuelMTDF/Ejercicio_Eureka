// EJERCICIO "EUREKA"

/*
• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa
*/

let password: string = "eureka";
let contador: number = 0;
let clave: string | null;

while (contador < 3) {
  clave = prompt("Por favor, ingrese su contraseña:");
  if (password === clave) {
    contador = 3;
    console.log("Usted ha ingresado correctamente al programa.");
  } else {
    contador = contador + 1;
    if (contador < 3) {
      alert("Contraseña incorrecta. Intente nuevamente.");
    }
  }
}
if (password !== clave) {
  alert("Acceso Denegado");
  console.log(
    "Usted ha agotado el número de intentos posibles. Acceso denegado."
  );
}
