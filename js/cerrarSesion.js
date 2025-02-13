const botonCerrarSesion = document.getElementById("idBotonCerrarSesion");

const cerrarSesion = (ev) => {
  ev.preventDefault();

  const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioLogueado = usuariosLs.find((usuario) => usuario.iniciarSesion);

  usuarioLogueado.iniciarSesion = false;

  localStorage.setItem("usuarios", JSON.stringify(usuariosLs));

  setTimeout(() => {
    location.href = "../index.html";
  }, 1000);
};

botonCerrarSesion.addEventListener("click", cerrarSesion);
