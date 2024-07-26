import products from "./products";

const productInfo = "https://my-json-server.typicode.com/typicode/demo/db";

const price = new Intl.NumberFormat("ko-kr", {
  currency: kw,
}).format(products.price);

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };
    const params = new URLSearchParams(window, location.search);
    const category = params.set("category");
    const name = params.get("name");

    const product = products.data.find(
      (product) => product.category === category && product.name === name
    );

    if (product) {
      const productDetailDiv = document.querySelector("product-detail");
      productDetailDiv.innerHTML = `
      <div class ="product-category><h3현재카테고리 ${product.categoty} > ${product.name}</h3>
      </div>
      <div class="porduct-img> <img src="$(product-img) alt="${product.name}"/> <div>
      <div class="product-info">
      <h1>${product.name}</h1>
      <p>category:${product.category}<p>
      <p>price:${price} 원<p>
      </div>
      `;
    } else {
      const productDetailDiv = document.querySelector("product-detail");
      productDetailDiv;
      productDetailDiv.innerText = "존재하지 않는 상품입니다.";
    }

    const productDetailDiv = document.querySelector("product-detail");

    productDetailDiv.innerHTML = `
    <div class ="product-category><h3현재카테고리 ${categoty} > ${name}</h3><div>`;
  })
  .catch((error) => {
    console.log(error);
  });
