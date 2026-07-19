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

for (let i = 0; i < menuItems.length; i++) {
    output += "<p>" + menuItems[i] + " - " + price + "</p>";
}

document.getElementById("menu").innerHTML = output;