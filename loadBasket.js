window.addEventListener("load", () => {
    
    let quantityInBasket = JSON.parse(localStorage.getItem('basketQuantity') || ['0']);
    document.querySelector(".basket_quantity").textContent = quantityInBasket; 
    let totalSumInBasket = JSON.parse(localStorage.getItem('totalPrice') || [0]);
    
    if (!totalSumInBasket) return totalSumInBasket = 0
    let totalSumInBasketNum = Number(totalSumInBasket)
    document.querySelector("#total_sum").textContent = "Total sum: $" + totalSumInBasketNum.toFixed(2);
    let names = document.querySelectorAll('h3[data-order]')

    names.forEach(name => {
        let findOrder = name.dataset.order;
        
        if (localStorage.getItem(findOrder)) {
            let elFromLocalstorage = JSON.parse(localStorage.getItem(findOrder) || [" "])
            quantity = document.createElement("div");
            quantity.setAttribute('data-order', `${name.dataset.order}`)
            quantity.classList.add("quantity_btn");
            quantity.insertAdjacentHTML("afterbegin", '<i class="fa-solid fa-square-minus"></i>');
            quantityNumber = document.createElement("span");
            quantityNumber.classList.add("quantity_number");
            quantityNumber.textContent = 1;
            quantity.append(quantityNumber);
            quantity.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-square-plus"></i>');
          
            let div_order = document.createElement("div");
            div_order.classList.add("div_order");
            div_order.setAttribute('data-order', `${name.dataset.order}`);
            let img_in_order = document.createElement("img");
            img_in_order.src = elFromLocalstorage.foto;
            img_in_order.classList.add("img_in_order");
            div_order.append(img_in_order);
            let divInfoPosition = document.createElement("div");
            divInfoPosition.classList.add("info_position");
            name_in_order = document.createElement("p");
            name_in_order.textContent = elFromLocalstorage.name;
            divInfoPosition.append(name_in_order);
            quantity = document.createElement("div");
            quantity.setAttribute('data-order', `${name.dataset.order}`);
            quantity.classList.add("quantity");
            quantity.insertAdjacentHTML("afterbegin", '<i class="fa-solid fa-square-minus"></i>');
            quantityNumber = document.createElement("span");
            quantityNumber.classList.add("quantity_number");
            quantityNumber.textContent = elFromLocalstorage.quantity;
            
            quantity.append(quantityNumber);
            quantity.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-square-plus"></i>');
            divInfoPosition.append(quantity);
            price_in_order = document.createElement("span");
            let PriceInOrder = Number(elFromLocalstorage.sumOrder)
            price_in_order.textContent = "$" + PriceInOrder.toFixed(2);      
           
            divInfoPosition.append(price_in_order);

            divInfoPosition.append(price_in_order);
            div_order.append(divInfoPosition);
    div_order.insertAdjacentHTML("beforeend", '<i id="xmark_block_order" class="fa-solid fa-xmark xmark xmark_in_block"></i>')
            order_block.append(div_order);
            
           
        }
       
        }) 
      
        
        order_btns.forEach(order_btn => {
            if(localStorage.getItem(order_btn.dataset.order)) {
                order_btn.style.display = "none";
                order_btn.nextElementSibling.style.display = "flex" 
            }
        })
        document.querySelectorAll(".quantity_number ").forEach(elem => {
            if (localStorage.getItem(elem.dataset.order)) {
              elem.textContent = (JSON.parse(localStorage.getItem(elem.dataset.order))).quantity
            }
        })
    let order = document.querySelector("#order");
    let minusesFromBasket = order.querySelectorAll(".fa-square-minus");
    let plusFromBusket = order.querySelectorAll(".fa-square-plus");
    minusesFromBasket.forEach(min => min.addEventListener("click", delDishFromBasket))
    plusFromBusket.forEach(plus => plus.addEventListener("click", addToBasketDishes))
    let delBtn = order.querySelectorAll(".xmark_in_block");
    delBtn.forEach(del => del.addEventListener("click", deleteDishesFromBasket ))

})

