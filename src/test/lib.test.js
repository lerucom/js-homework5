import {PurchaseList} from "../js/lib";

test('If we have banana & orange in cart and banana price = 50, orange price = 70 then total cost = 120', () => {
    const testItem1 = {name: 'banana', price: 50};
    const testItem2 = {name: 'orange', price: 70};
    const purchaseList = new PurchaseList();
    purchaseList.items.push(testItem1, testItem2);
    const result = purchaseList.sumPurchases();
    expect(result).toBe('120.00');
});

test('If we have banana & orange in cart and banana price = 50, orange price = 70 then most expensive purchase is \'orange 70.00\'', () => {
    const testItem1 = {name: 'banana', price: 50};
    const testItem2 = {name: 'orange', price: 70};
    const purchaseList = new PurchaseList();
    purchaseList.items.push(testItem1, testItem2);
    const result = purchaseList.mostExpensivePurchase().purchaseName + ' = ' + purchaseList.mostExpensivePurchase().purchasePrice;
    expect(result).toBe('orange = 70.00');
});

