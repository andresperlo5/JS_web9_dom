const inputUsuario = document.getElementById("idInputUsuario");
const inputEmail = document.getElementById("idInputEmail");
const inputContrasenia = document.getElementById("idInputContrasenia");
const inputRContrasenia = document.getElementById("idInputRContrasenia");
const inputCheck = document.getElementById("idInputCheck");
const botonRegistro = document.getElementById("idBotonRegistro");

const parrafoErrorUsuario = document.getElementById("idErrorUsuario");
parrafoErrorUsuario.classList.add("d-none");
//investigar el evento input

const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];

const registarUsuario = (ev) => {
  ev.preventDefault();

  // console.log(inputCheck.checked);
  const reglaEmail = new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  ).test(inputEmail.value);

  console.log(reglaEmail);

  if (
    !inputUsuario.value ||
    !inputEmail.value ||
    !inputContrasenia.value ||
    !inputRContrasenia.value
  ) {
    //alert("formulario incompleto");
    inputUsuario.classList.add("is-invalid");
    parrafoErrorUsuario.classList.remove("d-none");
  }

  if (
    inputUsuario.value &&
    inputEmail.value &&
    inputContrasenia.value &&
    inputRContrasenia.value &&
    inputCheck.checked
  ) {
    if (inputContrasenia.value === inputRContrasenia.value) {
      const nuevoUsuario = {
        id: usuariosLs[usuariosLs.length - 1]?.id + 1 || 1,
        nombre: inputUsuario.value,
        email: inputEmail.value,
        contrasenia: inputContrasenia.value,
        rol: "usuario",
        iniciarSesion: false,
        status: "disabled",
      };

      usuariosLs.push(nuevoUsuario);
      inputUsuario.value = "";
      inputEmail.value = "";
      inputContrasenia.value = "";
      inputRContrasenia.value = "";
      inputCheck.checked = false;

      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
      alert("Gracias por tu registro");
    }
  }
};

botonRegistro.addEventListener("click", registarUsuario);
