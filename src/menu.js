export { loadMenu };

class MenuItem {
    #name
    #price
    #description

    constructor(name, price, description) {
        this.#name = name;
        this.#price = price;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get description() {
        return this.#description;
    }

    createMenuItemElement() {
        const item = document.createElement("div");

        const name = document.createElement("div");
        name.textContent = this.#name;

        const price = document.createElement("div");
        price.textContent = this.#price;

        const desc = document.createElement("div");
        desc.textContent = this.#description;

        item.appendChild(name);
        item.appendChild(price);
        item.appendChild(desc);

        return item;
    }
}

const menuItems = [
    new MenuItem("Pollo con arroz", 15, "Chicken with rice, a classic"),
    new MenuItem("Arroz con arroz", 13, "Ricetacular."),
]

function loadMenu() {
    const menuDiv = document.createElement("div");

    for (const menuItem of menuItems) {
        menuDiv.appendChild(menuItem.createMenuItemElement());
    }

    content.appendChild(menuDiv);
}