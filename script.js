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

for (let i = 0; i < menuItems.length; i++) {
    output += `
        <div class="product">
            <h3>${menuItems[i]}</h3>
            <p>Price: ${price}</p>

            <label for="orders${i}">How many would you like?</label>

            <div class="orderControls">
                <input
                    type="number"
                    id="orders${i}"
                    min="0"
                    max="10"
                    value="0"
                >
                <button type="button">Submit</button>
            </div>
        </div>
    `;
}

document.getElementById("menu").innerHTML = output;