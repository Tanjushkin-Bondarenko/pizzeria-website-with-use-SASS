function createDishesInOrder() {
    this.style.display = "none";
    this.nextElementSibling.style.display = "flex"
    let curNum = JSON.parse(localStorage.getItem(this.dataset.order) || [0])
    let currentOrderQ = curNum.quantity
    let el = this.nextElementSibling.childNodes[2]
    el.textContent =  currentOrderQ ;
    let div_order = document.createElement("div");
    div_order.classList.add("div_order");
    div_order.setAttribute('data-order', `${this.dataset.order}`)
    for (const img of order_imgs) {
        if (this.dataset.order == img.dataset.order) {
            let img_in_order = document.createElement("img");
            img_in_order.src = img.src;
            img_in_order.classList.add("img_in_order");
            div_order.append(img_in_order);

            key = this.dataset.order;
            saveFoto = img.src
        }
    }
    let divInfoPosition = document.createElement("div");
    divInfoPosition.classList.add("info_position")
    for (const name of order_names) {
        if (this.dataset.order == name.dataset.order) {
            name_in_order = document.createElement("p");
            name_in_order.textContent =saveName = name.textContent;
            divInfoPosition.append(name_in_order);
            quantity = document.createElement("div");
        }
    }

    for (const price of order_prices) {
        if (this.dataset.order == price.dataset.order) {
            quantity = document.createElement("div");
            quantity.setAttribute('data-order', `${this.dataset.order}`);
            quantity.classList.add("quantity");
            quantity.insertAdjacentHTML("afterbegin", '<i class="fa-solid fa-square-minus"></i>');
            quantityNumber = document.createElement("span");
            quantityNumber.classList.add("quantity_number");
            quantityNumber.textContent = 1;
            totalQuantity = JSON.parse(localStorage.getItem("basketQuantity")) || 0
            totalQuantity += Number(quantityNumber.textContent);
            localStorage.setItem("basketQuantity", totalQuantity);

            document.querySelector(".basket_quantity").textContent = totalQuantity;
            quantity.append(quantityNumber);
            quantity.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-square-plus"></i>');
            divInfoPosition.append(quantity);
            price_in_order = document.createElement("span");
            price_in_order.textContent =  savePrice = price.textContent;
     
            saveQuantity = quantityNumber.textContent
            
            let priceGood = price.querySelector(".price").textContent;
            price_in_order.setAttribute("data-price", priceGood);
            divInfoPosition.append(price_in_order);
            savePriceOrder = +priceGood;
            totalSum = Number(JSON.parse(localStorage.getItem("totalPrice")) || ['0']) 
            totalSum += Number(price_in_order.dataset.price);
            let totalSumToFixed = totalSum.toFixed(2)
            document.querySelector("#total_sum").textContent = "Total sum: $" + totalSumToFixed;
            localStorage.setItem("totalPrice",JSON.stringify(totalSumToFixed))
        }
    }
    div_order.append(divInfoPosition);
    div_order.insertAdjacentHTML("beforeend", '<i id="xmark_block_order" class="fa-solid fa-xmark xmark"></i>')
    order_block.append(div_order);

    document.querySelectorAll("#xmark_block_order").forEach(xmark => xmark.addEventListener("click", deleteDishesFromBasket))

    
 minuses.forEach(min => min.addEventListener("click", delDishFromBasket))

   
    pluses.forEach(plus => plus.addEventListener("click", addToBasketDishes))
    
    saveDish = {
        foto: saveFoto,
        name: saveName,
        price: savePrice,
        quantity: saveQuantity,
        sumOrder: savePriceOrder
}

    localStorage.setItem(key, JSON.stringify(saveDish));

    let order = document.querySelector("#order");
    let minusesFromBasket = order.querySelectorAll(".fa-square-minus");
    let plusFromBusket = order.querySelectorAll(".fa-square-plus");
    minusesFromBasket.forEach(min => min.addEventListener("click", delDishFromBasket))
    plusFromBusket.forEach(plus => plus.addEventListener("click", addToBasketDishes))
    
}