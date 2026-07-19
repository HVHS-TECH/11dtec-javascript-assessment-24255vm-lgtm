console.log("Hello world!")

const menuItems = [
    "Guppy Special",
    "Dark Guppy",
    "Gupster",
    "Green Guppy",
    "Vanilla Guppy",
    "Mocha Guppy"
]

let price = "$10";

const output = "";

for (var i = 0; i < menuItems.length; i++) {
    output += `<div class="product">
             <h3>${menuItems[i]}</h3> 
             <p>Price: ${price}</p>
            <label for="orders${i}">How many would you like?</label>
            <input type="number" id="orders${i}" min="0" value="0">
        </div>
        `;
}

document.getElementById("menu").innerHTML = output;