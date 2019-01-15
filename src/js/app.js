import {cart} from './lib.js';

const goodsNameEl = document.getElementById('goods-name');
const goodsPriceEl = document.getElementById('goods-price');
const goodsAddBtnEl = document.getElementById('goods-add-btn');
const mostExpensivePurchaseEl = document.getElementById('most-expensive-purchase');
const purchaseQuantityEl = document.getElementById('purchases-quantity');
const totalCostEl = document.getElementById('total-cost');

goodsAddBtnEl.addEventListener('click', function () {
        let purchase = {
            name: goodsNameEl.value,
            price: goodsPriceEl.value
        };
        cart.items.push(purchase);
        mostExpensivePurchaseEl.textContent = cart.mostExpensivePurchase();
        purchaseQuantityEl.textContent = cart.items.length.toString();
        totalCostEl.textContent = cart.sumPurchases();
        goodsNameEl.value = "";
        goodsPriceEl.value = "";
    }
);