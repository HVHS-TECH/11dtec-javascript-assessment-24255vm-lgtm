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
const totaldiv = document.getElementById("carttotal");

var total = 0;

if (cartdiv && totaldiv) {

cart.forEach(item => {

   var itemtotal = item.price * item.quantity;

   total += itemtotal;

cartdiv.innerHTML += `

<div class="cart-product"><img src="${item.image}" alt="${item.name}" style="width: 50%; height: 50%;">

<p> ${item.name} x ${item.quantity} - $${itemtotal}</p></div>`;

});


 totaldiv.innerHTML = "Total: $" + total;
}



function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function checkout() { 


  const name= document.getElementById("customerName").value;
  const money = Number(document.getElementById("customerMoney").value);


  if (name === "") {
    alert("Please enter your name!");
    return;
  }

    if (money < total) {
        alert(
            "you're too broke!\n" +
            "Your total is $" + total +
            "\nYou entered $" + money
        );
        return;
    }

  var change = money - total;


  alert("Thank you for your purchase, " + name +"!\nYour total is $" + total + change + "!");

  localStorage.removeItem("cart");

  location.reload();
}