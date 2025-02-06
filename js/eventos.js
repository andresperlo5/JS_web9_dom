/*Eventos  =  Accion*/
//click - escribir - scroll - mouse
/* const botonCard1 = document.getElementById("idCard1");

const botonClick = () => {
  alert("Hola desde una funcion externa al evento");
};
 */

/* botonCard1.addEventListener("click", () => alert("boton 1 clickeado")); */

/* botonCard1.addEventListener("click", botonClick); */

const inputUsuario = document.getElementById("idInputUsuario");
const inputEmail = document.getElementById("idInputEmail");
const inputContrasenia = document.getElementById("idInputContrasenia");
const inputRContrasenia = document.getElementById("idInputRContrasenia");
const botonRegistro = document.getElementById("idBotonRegistro");
console.log(inputUsuario);

/* inputUsuario.addEventListener("change", (event) =>
  console.log(event.target.value)
);

inputEmail.addEventListener("change", (event) =>
  console.log(event.target.value)
);

inputContrasenia.addEventListener("change", (event) =>
  console.log(event.target.value)
);

inputRContrasenia.addEventListener("change", (event) =>
  console.log(event.target.value)
); */

/* botonRegistro.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log(inputUsuario.value);

  if (!inputUsuario.value) {
    alert("Campo usuario vacio");
  }

  if (inputContrasenia !== inputRContrasenia) {
    alert("Las contraseñas no coinciden");
  }
}); */
