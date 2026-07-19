console.log("Hello world!")

var cart = [];

function addToCart(name, price) {
  cart.push({
    name: name,
    price: price

  
    });

document.getElementById("cart").innerHTML = outputCart();

}