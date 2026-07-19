console.log("Hello world!")

var cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, quantityId) {

  const quantity = parseInt(document.getElementById(quantityId).value);

  cart.push({
    name: name,
    price: price,
    quantity: quantity
    
  });

localStorage.setItem("cart", JSON.stringify(cart));

alert("added to cart!");

}

if (cartdiv) {

cart.forEach(item => {
cartdiv.innerHTML += `<p> ${item.name} x ${quantity} - $${item.price * item.quantity}</p>`;
});

}