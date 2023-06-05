function addToBasketDishes() {
    const thisDataset = this.parentElement.dataset.order;
    const elementsInMenu = document.querySelectorAll(".quantity_number");
    elementsInBasket = document.querySelectorAll(".quantity");
    const priceElem = document.querySelectorAll('span.price');

    let count = (Number(this.previousElementSibling.textContent)) + 1;
    dishs = JSON.parse(localStorage.getItem(thisDataset));
    dishs.quantity = +count;
    localStorage.setItem(thisDataset, JSON.stringify(dishs))
    for(const elem of priceElem) {
        if (elem.parentElement.dataset.order == thisDataset) {
            dishs = JSON.parse(localStorage.getItem(thisDataset));
            const newPriceOrder = Number(dishs.sumOrder) + Number(elem.textContent);
            dishs.sumOrder = newPriceOrder.toFixed(2)
            localStorage.setItem(thisDataset, JSON.stringify(dishs))
            const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
            saveTotalPrice = Number(totalPrice) + Number(elem.textContent);
            localStorage.setItem("totalPrice", JSON.stringify(saveTotalPrice))
        }
    }

    for (const el of elementsInBasket) {
        if (el.dataset.order == thisDataset) {
            el.querySelector("span").textContent = count;

            dishs = JSON.parse(localStorage.getItem(thisDataset));
                const thisOrderPrice = Number(dishs.sumOrder)
                el.nextSibling.textContent = "$" + thisOrderPrice.toFixed(2)
                
        }
        for (const el of elementsInMenu) {
            if (el.dataset.order == thisDataset) {
               el.textContent = count
            }
        }
        
        
    }
   
    showInBasketQuantity()
}
function delDishFromBasket() {
    if (this.nextElementSibling.textContent == 1) {
        return
    } else {
        const thisDataset = this.parentElement.dataset.order;
        elementsInBasket = document.querySelectorAll(".quantity")
        const elemsInMenu = document.querySelectorAll(".quantity_btn");
        const priceElem = document.querySelectorAll('span.price');
        const count = Number(this.nextElementSibling.textContent) - 1;
        dishs = JSON.parse(localStorage.getItem(thisDataset));
        dishs.quantity = +count;
        localStorage.setItem(thisDataset, JSON.stringify(dishs))
        
        for (const elem of priceElem) {
            if (elem.parentElement.dataset.order == thisDataset) {
                dishs = JSON.parse(localStorage.getItem(thisDataset));
    
                const newPriceOrder = Number(dishs.sumOrder) - Number(elem.textContent);
                dishs.sumOrder = newPriceOrder
                localStorage.setItem(thisDataset, JSON.stringify(dishs))
                const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
                saveTotalPrice = Number(totalPrice) - Number(elem.textContent);
                localStorage.setItem("totalPrice", JSON.stringify(saveTotalPrice))
            }
         
        }
        for (const elem of elementsInBasket) {
            if (elem.dataset.order == thisDataset) { 
                dishs = JSON.parse(localStorage.getItem(thisDataset));
                const thisOrderPrice = Number(dishs.sumOrder);

                elem.nextSibling.textContent = "$" + thisOrderPrice.toFixed(2)
                elem.querySelector("span").textContent = count;
            }  
        }
        for (const elem of elemsInMenu) {
            if (elem.dataset.order == thisDataset) {
                elem.querySelector("span").textContent = count
            }
        }
    
       
        showInBasketQuantity()
    }
    
}