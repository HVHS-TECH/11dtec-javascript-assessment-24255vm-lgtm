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

            <button class="priceBtn">$10.00</button>

            <label for="orders${i}">How many would you like?</label>

            <input
                type="number"
                id="orders${i}"
                min="-10"
                value="0"
                max="10"
            >
        </div>
    `;
}

document.getElementById("menu").innerHTML = output;