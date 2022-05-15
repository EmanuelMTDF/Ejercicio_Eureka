// EJERCICIO "EUREKA"

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
