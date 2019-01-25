export class Purchase {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class PurchaseList {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }

    }

    sumPurchases() {
        let result = 0;
        for (const item of this.items) {
            result += parseFloat(item.price);
        }
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
        return {
            purchaseName: purchaseName,
            purchasePrice: purchasePrice.toFixed(2)
        };
    }
}