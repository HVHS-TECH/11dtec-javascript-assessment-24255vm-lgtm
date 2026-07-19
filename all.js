console.log("Hello world!")

var cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, quantityId, image) {

  const quantity = parseInt(document.getElementById(quantityId).value);

  cart.push({
    name: name,
    price: price,
    quantity: quantity,
    image: image
  });

localStorage.setItem("cart", JSON.stringify(cart));

alert("added to cart!");

}

const cartdiv = document.getElementById("cartitems");

if (cartdiv) {

cart.forEach(item => {

cartdiv.innerHTML += `

<div class="cart-product">
<img src="${item.image}" alt="${item.name}" 
style="width: 50%; height: 50%;">

<p> ${item.name} x ${item.quantity} - $${item.price * item.quantity}</p>`;

});

}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function checkout() { 


  const name= document.getElementById("customerName").value;

  if (name === "") {
    alert("Please enter your name before checking out.");
    return;
  }

  alert("Thank you for your purchase" + name + !);