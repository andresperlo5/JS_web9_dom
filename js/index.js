(async () => {
  const productosApi = await fetch("https://fakestoreapi.com/products");

  const productosJson = await productosApi.json();
  const productosLs = JSON.parse(localStorage.getItem("productos")) || [];

  if (!localStorage.length || !productosLs.length) {
    localStorage.setItem("productos", JSON.stringify(productosJson));
  }
})();

const productosLs = JSON.parse(localStorage.getItem("productos")) || [];

console.log(productosLs);
// Map - Backticks - ``

const divCards = document.getElementById("idCardsProductos");

divCards.innerHTML = productosLs
  .map(
    (producto) =>
      `
<div class="col-12 col-md-6 col-lg-4 my-3">
  <div class="card">
      <img
        src="${producto.image}"
          alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-truncate">${producto.title}</h5>
              <p class="card-text text-truncate">
              ${producto.description}
              </p>
              <p class="card-text ">
              $ ${producto.price}
              </p>
                <div class="text-center">
                <a href="./paginas/productos/detalle-producto.html?id=${producto.id}" id="idCard1" class="btn btn-primary btn-js"
                  >Ver Mas</a
                    >
                </div>
            </div>
    </div>
 </div>
`
  )
  .join("");

//alternativas para impedir que documentos tipo XSS *(codigo malicioso) sean inyectados en nuestro sitio

//textContent y forEach

/* productosLs.forEach((producto) => {
  divCards.innerHTML = productosLs.map(
    (producto) =>
      `
<div class="col-12 col-md-6 col-lg-4 my-3">
  <div class="card">
      <img
        src="${producto.image}"
          alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-truncate">${producto.title}</h5>
              <p class="card-text text-truncate">
              ${producto.description}
              </p>
              <p class="card-text ">
              $ ${producto.price}
              </p>
                <div class="text-center">
                <a href="#" id="idCard1" class="btn btn-primary btn-js"
                  >Ver Mas</a
                    >
                </div>
            </div>
    </div>
 </div>
`
  );

  const ultimaCard = divCards.lastElementChild;
  ultimaCard.querySelector(".card-title").textContent = producto.title;
  ultimaCard.querySelector(".card-text").textContent = producto.description;
});

 */
//createElement y forEach

/* productosLs.forEach((producto) => {
  const divCard = document.createElement("div");
  divCard.classList.add("col-12", "col-md-6", "col-lg-4", "my-3");

  const card = document.createElement("div");
  card.classList.add("card", "m-2", "tamanio-card");

  const img = document.createElement("img");
  img.src = producto.image;
  img.classList.add("card-img-top");
  img.alt = producto.nombre;

  divCards.appendChild(divCard);
  divCard.appendChild(card);
  card.appendChild(img);
}); */
