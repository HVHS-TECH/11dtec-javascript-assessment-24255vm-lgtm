console.log("Hello world!")

const menuItems = [
    "Guppy Special",
    "Dark Guppy",
    "Gupster",
    "Green Guppy",
    "Vanilla Guppy",
    "Mocha Guppy"
]

const price = "$10";

const output = "";

for (var i = 0; i < menuItems.length; i++) {
    output += <div class="product">
             <h3>${menuItems[i]}</h3> 
             <p>Price: $${price}</p>
    ;
}

document.getElementById("menu").innerHTML = output;