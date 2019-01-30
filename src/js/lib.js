export class Purchase {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class PurchaseList {
    constructor() {
        const savedItems = JSON.parse(localStorage.getItem('tasks'));
        if (savedItems !== null) {
            this.items = savedItems;
        } else {
            this.items = [];
        }
    }

    add(item) {
        this.items.push(item);
        this.save();
    }

    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        this.save();

    }

    sumPurchases() {
        let result = 0;
        for (const item of this.items) {
            result += parseFloat(item.price);
        }

        this.save();
        return result.toFixed(2);
    }

    mostExpensivePurchase() {
        let purchaseName = "";
        let purchasePrice = 0;
        for (const item of this.items) {
            if (item.price > purchasePrice) {
                purchaseName = item.name.toString();
                purchasePrice = parseFloat(item.price);
            }
        }

        this.save();
        return {
            purchaseName: purchaseName,
            purchasePrice: purchasePrice.toFixed(2)
        };
    }

    save() {
        localStorage.setItem('tasks', JSON.stringify(this.items))
    }
}