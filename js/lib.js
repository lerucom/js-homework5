export const cart = {
    items: [],
    sumPurchases() {
        let result = 0;
        for (const item of this.items) {
            result += parseFloat(item.price);
        }
        return result.toFixed(2);
    },
    mostExpensivePurchase() {
        let purchaseName = "";
        let purchasePrice = 0;
        for (const item of this.items) {
            if (item.price > purchasePrice) {
                purchaseName = item.name.toString();
                purchasePrice = parseFloat(item.price);
            }
        }
        return purchaseName + ", стоимость: " + purchasePrice.toFixed(2);
    }

};