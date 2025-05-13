![image](https://github.com/user-attachments/assets/a0328b32-e2dc-4d61-8e5e-f53655557e43)


Mod5Lab1 Reflections:
How did you dynamically create and append new elements to the DOM? 
  In the addProduct() function, I dynamically created new elements by: created a new list item with document.createElement("li"), added a CSS class with 
  li.classList.add("cart-item"), set the item's content using template literals in li.innerHTML, attached the remove button event listener, and 
  appended the new element to the cart with cart.appendChild(li).

What steps did you take to ensure accurate updates to the total price? 
 The steps I took to ensure accurate updates to the total price where as follows:
 I maintained a totalPrice variable to track the running total, created an updateTotalPrice() function that will take positive or negative amounts, used 
 parseFloat() to convert string inputs to proper numbers, ----stored each item's price as a data attribute (li.dataset.price) for later reference, used toFixed(2) 
 to ensure consistent decimal formatting, and when user removes items, passed the negative price value to the update function.

How did you handle invalid input for product name or price? 
  I handled invalid inputs for a product name or price with this function/validation check: 

function validateProduct(productName, productPrice) {
  if (!productName || isNaN(productPrice) || productPrice <= 0) {
    alert("Please enter a valid product name and price");
    return;
  }

The above function/validation check prevents adding products with: empty product names, non-numeric price values, zero or negative prices.

What challenges did you face when implementing the remove functionality? 
  The main challenges I faced when implementing the remove functionality were: Figuring out which specific item to remove 
  (I solved this using event.target.closest("li")); finding the correct price to subtract (I solved this by storing price in dataset.price);
  ensuring event delegation for the dynamic buttons; updating the total price --(did this by passing a negative value), and removing the DOM element --(did this 
  with item.remove().) 

In addition to these challenges, I also found that as I am learning Javascript I made silly errors on using wrong  quotation marks in places, in CSS basic styling making cart-item
display: flex; and justify-content: space-around----which made the remove button attached to item be stuck to the right side of the browser:)--I solved this by changing the CSS for 
cart-item to display: block; and justify-content; flex-start;.  Silly errors like this happened, which I solved with the help of my fellow students in 2025-RTT-23 cohort.
