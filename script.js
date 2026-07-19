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

var output = "";

for (var i = 0; i < menuItems.length; i++) {
    output += `<div class="product">

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

        <div class="orderControls">
    <input type="number" id="orders${i}" min="0" value="0">
    <button type="button">Submit</button>
    </div>

document.getElementById("menu").innerHTML = output;