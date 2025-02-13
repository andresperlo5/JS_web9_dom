const inputUsuarioIS = document.getElementById("idInputUsuario1");
const inputContraseniaIS = document.getElementById("idInputContrasenia1");
const botonIniciarSesion = document.getElementById("idBotonIniciarSesion");

/* const parrafoErrorUsuario = document.getElementById("idErrorUsuario");
parrafoErrorUsuario.classList.add("d-none"); */
//investigar el evento input

const iniciarSesionUsuario = (ev) => {
  ev.preventDefault();

  const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioExiste = usuariosLs.find(
    (usuario) => usuario.nombre === inputUsuarioIS.value
  );

  if (!inputUsuarioIS.value || !inputContraseniaIS.value) {
    alert("formulario incompleto");
    /* inputUsuario.classList.add("is-invalid");
    parrafoErrorUsuario.classList.remove("d-none"); */
  }

  if (!usuarioExiste) {
    alert("Usuario y/o contraseña incorrecto. USUARIO");
  }

  if (inputContraseniaIS.value === usuarioExiste.contrasenia) {
    if (usuarioExiste.rol === "usuario") {
      usuarioExiste.iniciarSesion = true;
      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
      location.href = "../paginas/usuario.html";
    } else {
      usuarioExiste.iniciarSesion = true;
      localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
      location.href = "../paginas/admin.html";
    }
  } else {
    alert("Usuario y/o contraseña incorrecto. CONTRASENIA");
  }
};

botonIniciarSesion.addEventListener("click", iniciarSesionUsuario);
