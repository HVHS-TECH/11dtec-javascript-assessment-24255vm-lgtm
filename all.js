console.log("Hello wold!")

//cart code//

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

function checkQuantity(input) {
    if (input.value > 50) {
        alert("You can only order up to 50 of one item.");
        input.value = 50;
    }
}

function blockInvalidKeys(event) {
   if (
        event.key === "e" ||
        event.key === "E" ||
        event.key === "+" ||
        event.key === "-"
    ) {
        alert("Please enter a whole number between 0 and 50.");
        event.preventDefault();
        return false;
    }
  }

function blockInvalidKeys1(event1) {
   if (
        event.key === "e" ||
        event.key === "E" ||
        event.key === "+" ||
        event.key === "-"
    ) {
        alert("Please enter a valid number!");
        event.preventDefault();
        return false;
    }
  }

function lettersOnly(input) {
    let original = input.value;

    input.value = input.value.replace(/[^a-zA-Z ]/g, "");

    if (original !== input.value) {
        alert("Please enter a valid name. (No symbols or numbers.)");
    }
}
if (cartdiv && totaldiv) {

for (let i = 0; i < cart.length; i++) {

  let item = cart[i];
  let itemtotal = item.price * item.quantity;

   total += itemtotal;

cartdiv.innerHTML += `

<div class="cart-product"><img src="${item.image}" alt="${item.name}" style="width: 50%; height: 50%;">

<p> ${item.name} x ${item.quantity} - $${itemtotal}</p></div>`;

};


 totaldiv.innerHTML = "Total: $" + total;
}



function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

//final checkout//

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

     const change = money - total;



  alert(
    "Thank you for your purchase, " + name +
    "!\nYour total is $" + total +
    "\nYour change is $" + change
);

  localStorage.setItem("customerName", name);
  localStorage.setItem("customerMoney", money);
  localStorage.setItem("change", change);
  localStorage.setItem("total", total);

  window.location.href = "receipt.html";

}

//receipt beggening///

  const receipt = document.getElementById("receipt");



if (receipt) {

  const name= localStorage.getItem("customerName");
  const money = localStorage.getItem("customerMoney");
  const change = localStorage.getItem("change");
  const total = localStorage.getItem("total");

 receipt.innerHTML = `
        <h2>Thank you for your purchase!</h2>

        <p>Name: ${name}</p>

        <p>Total: $${total}</p>

        <p>Money Paid: $${money}</p>

        <p>Change: $${change}</p>

        <h3>Items Purchased:</h3>
    `;

    for (let i = 0; i < cart.length; i++) {

        let item = cart[i];

        receipt.innerHTML += `
            <p>
                ${item.name} x ${item.quantity}
                - $${item.price * item.quantity}
            </p>
        `;

    };

localStorage.removeItem("cart");
localStorage.removeItem("customerName");
localStorage.removeItem("customerMoney");
localStorage.removeItem("change");
localStorage.removeItem("total");

}