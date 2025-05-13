const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");
 
let totalPrice = 0;
 

function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 

function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}


function addProduct() {
  // Get values from input fields
  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);


if (!productName || isNaN(productPrice) || productPrice <= 0) {
  alert ("Please enter a valid product name and price");
  return;
}

//Create a new list item
const li = document.createElement("li");
li.classList.add("cart-item");
li.dataset.price = productPrice;
li.innerHTML = `
  <span>${productName} - $${productPrice.toFixed(2)}</span>
    <button class="remove-button">Remove</button>
    `;
  
//Add event listener to the remove button
const removeButton = li.querySelector(".remove-button");
removeButton.addEventListener("click", removeItem);

//Add item to cart
cart.appendChild(li);

//Update total price
updateTotalPrice(productPrice);

//Clear input fields
productNameInput.value = "";
productPriceInput.value = "";
}

//Add event listener to the Add Product buttton
addProductButton.addEventListener("click", addProduct);
  

