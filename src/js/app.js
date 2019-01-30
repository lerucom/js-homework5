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

rebuildTree(listEl, purchaseList);

goodsAddBtnEl.addEventListener('click', function (evt) {
    evt.preventDefault();
    validate(this.form);
    if ((goodsNameEl.value.trim() !== '') && (goodsPriceEl.value > 0)) {

        const purchase = new Purchase(goodsNameEl.value, goodsPriceEl.value);
        purchaseList.add(purchase);

        goodsNameEl.value = "";
        goodsPriceEl.value = "";

        rebuildTree(listEl, purchaseList);
    }
});

function validate(form) {
    const elems = form.elements;

    resetError(elems.goodsname.parentNode);
    if (!elems.goodsname.value) {
        showError(elems.goodsname.parentNode);
    }

    resetError(elems.goodsprice.parentNode);
    if (!elems.goodsprice.value) {
        showError(elems.goodsprice.parentNode);
    }
}

function resetError(container) {
    container.classList.remove('error');
}

function showError(container) {
    container.classList.add('error');
}

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
        <button data-id="remove" class = "btn btn-danger btn-sm float-right">&times;</button>
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