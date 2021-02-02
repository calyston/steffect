//Strapi Products Call
const productsSection = document.getElementById('products-grid')
const loadingDiv = document.getElementById('loading-container')

fetch('http://167.99.193.212/products')
  .then(res => res.json())
  .then((data) => {
    createHtml(data)
    return
  })
  .catch(err => {
    console.log(err)
  })

const createHtml = (productsArray) => {
  const productsHtml = productsArray.map((product) => {
    const { id, image, title, price } = product;
    return (`
      <div id=${id} class="grid-product">
      <img src= http://167.99.193.212${image[0].url} alt="">
      <p class="grid-product-name">${title}</p>
      <p>£${price.toFixed(2)}</p>
      <button onClick='addCount()' class="add-to-bag">Add to Bag</button>
    </div>
    `);
  }).join('');

  loadingDiv.style.display = "none";
  productsSection.innerHTML = productsHtml;
};

//Add to Cart
// const cartButton = document.getElementsByClassName("cartButton");
// let cartCounter = document.getElementById("cart-circle");
let clicks = 0;

function addCount() {
  clicks++;
  alert("Item added to cart.");
  // cartCounter.style.backgroundColor = "#e2574c";
  // cartCounter.innerHTML = (clicks);
}