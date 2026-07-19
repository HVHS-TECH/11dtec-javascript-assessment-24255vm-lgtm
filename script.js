console.log("Hello world!")

var menuItems = [
    "Guppy Special",
    "Dark Guppy",
    "Gupster",
    "Green Guppy",
    "Vanilla Guppy",
    "Mocha Guppy"
]

var price= "$10"

let output = "";

for (let i = 0; i < menuItems.length; i++) {
    output += "<p>" + menuItems[i] + " - " + price + "</p>";
}

document.getElementById("menu").innerHTML = output;