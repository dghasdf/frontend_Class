const url = "https://reqres.in/api/products/10";

const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);

    result.innerHTML = `
    <p>상품명 : ${products.data.name}</p>
    <p>생산년도 : ${products.data.year}</p>
    <p>상품색상: ${products.data.color}</p>`;
  }
};
