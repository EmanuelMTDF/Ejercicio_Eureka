
let password : string = "eureka";
let contador : number = 0;

while (contador < 3) {
  let clave : string = prompt("Por favor, ingrese su contraseña");
  if (password === clave) {
    contador = 3;
    console.log("Usted ha ingresado correctamente al programa");
  } else {
    contador = contador + 1;
    if (contador < 3){
    console.log("Clave incorrecta. Ingrese nuevamente su clave");
    }
  }
}

if (password !== clave){
  console.log ("Usted ha agotado el número de intentos posibles. Acceso denegado");
}
