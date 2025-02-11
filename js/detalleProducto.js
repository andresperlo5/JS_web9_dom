/* const idParametro = location.search.split("?id=")[1];
console.log(idParametro); */
//Otra manera de encotrar el id por el parametro

/* const params = new URL(location.href).searchParams.get("id");
console.log(params); */

const parametroId = new URLSearchParams(location.search).get("id");
const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
const divDetalleProducto = document.getElementById("idProducto");

const productoFiltrado = productosLs.find(
  (producto) => producto.id === Number(parametroId)
);

if (!productoFiltrado) {
  alert("producto no encontrado");
}

divDetalleProducto.innerHTML = `
       <div class="col-12 col-md-6 clase-card-js">
          <img src="${productoFiltrado.image}" alt="" />
        </div>
        <div class="col-12 col-md-6">
          <h3>${productoFiltrado.title}</h3>
          <p>${productoFiltrado.description}</p>
          <small>$${productoFiltrado.price}</small>
          <div>
            <button class="btn btn-warning">Añadir al Carrito</button>
            <button class="btn btn-success">Comprar</button>
          </div>
        </div>

`;
