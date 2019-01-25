import {Purchase, PurchaseList} from './lib.js';

const goodsNameEl = document.getElementById('goods-name');
const goodsPriceEl = document.getElementById('goods-price');
const goodsAddBtnEl = document.getElementById('goods-add-btn');
const mostExpensivePurchaseNameEl = document.getElementById('most-expensive-purchase-name');
const mostExpensivePurchasePriceEl = document.getElementById('most-expensive-purchase-price');
const purchaseQuantityEl = document.getElementById('purchases-quantity');
const totalCostEl = document.getElementById('total-cost');
const listEl = document.getElementById('purchases-list');

const purchaseList = new PurchaseList();

goodsAddBtnEl.addEventListener('click', function () {
    if ((goodsNameEl.value.trim() !== '') && (goodsPriceEl.value > 0)) {

        const purchase = new Purchase(goodsNameEl.value, goodsPriceEl.value);
        purchaseList.add(purchase);

        goodsNameEl.value = "";
        goodsPriceEl.value = "";

        rebuildTree(listEl, purchaseList);

    } else {
        goodsNameEl.value = "";
        goodsPriceEl.value = "";
        alert('Повторите попытку (Наименование покупки - не пустая строка, а стоимость - больше 0)');
    }
});

function rebuildTree(container, list) {
    container.innerHTML = '';
    for (const item of list.items) {

        mostExpensivePurchaseNameEl.textContent = purchaseList.mostExpensivePurchase().purchaseName;
        mostExpensivePurchasePriceEl.textContent = purchaseList.mostExpensivePurchase().purchasePrice;
        purchaseQuantityEl.textContent = purchaseList.items.length.toString();
        totalCostEl.textContent = purchaseList.sumPurchases();

        const liEl = document.createElement('li');
        liEl.className = 'list-group-item';

        liEl.innerHTML = `
        <span data-id="text">${item.name}, ${item.price} \u20BD</span>        
        <button data-id="remove" class = "btn btn-danger btn-sm float-right">Remove</button>
        `;

        const removeEl = liEl.querySelector('[data-id=remove]');
        removeEl.addEventListener('click', function () {
            purchaseList.remove(item);
            rebuildTree(container, list);
        });

        container.appendChild(liEl);
    }

    if (list.items.length === 0) {
        mostExpensivePurchaseNameEl.textContent = '';
        mostExpensivePurchasePriceEl.textContent = '';
        purchaseQuantityEl.textContent = '';
        totalCostEl.textContent = '';
    }
}