console.log("Hello world!")

var cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, quantityId) {
  const quantity = parseInt(document.getElementById(quantityId).value);

  cart.push({
    name: name,
    price: price,
    quantity: quantity
    
  });

document.getElementById("cart").innerHTML = outputCart();

}

const cartdiv=document.getElementById("cartitems");

cart.forEach(item => {
cartdiv.innerHTML += `<p> ${item.name} x ${quantity} - $${item.price * item.quantity}</p>`;
});