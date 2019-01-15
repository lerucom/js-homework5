import {cart} from "../js/lib";

test('If we have banana & orange in cart and banana price = 50, orange price = 70 then total cost = 120', () => {
    const cart = {
        items: [{name: 'banana', price: 50}, {name: 'orange', price: 70}],
        sumPurchases() {
            let result = 0;
            for (const item of this.items) {
                result += parseFloat(item.price);
            }
            return result.toFixed(2);
        }
    };
    const result = cart.sumPurchases();
    expect(result).toBe('120.00');
});

