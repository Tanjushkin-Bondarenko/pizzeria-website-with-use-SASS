
let sectionBtn1 = document.querySelector("#section1");
let sectionBtn2 = document.querySelector("#section2");
let sectionBtn3 = document.querySelector("#section3");
let btns_top = document.querySelectorAll(".menu_btn");
let drinks_btn = document.querySelector(".home2_btn2");
let hot_meals_btn = document.querySelector(".home2_btn1");
let burgers_btn = document.querySelector(".home2_btn3");
let pasta_btn = document.querySelector(".home2_btn4");

let menu_hot_meals = document.querySelector("#menu_hot_meals")
let menu_drinks = document.querySelector("#menu_drinks");
let menu_burgers = document.querySelector("#menu_burgers");
let menu_pasta = document.querySelector("#menu_pasta");


let order_btns = document.querySelectorAll(".order");
let order_imgs = document.querySelectorAll(".order_img");

let order_names = document.querySelectorAll(".order_name");
let order_prices = document.querySelectorAll(".order_price");

let order_block = document.querySelector("#order_block");
let order = document.querySelector("#order")
let name_in_order;
let price_in_order;
let quantity;
let quantityNumber;
let totalSum = 0;
let totalQuantity = 0;
let elementsInBasket;
let basket = document.querySelector("#basket");
let btns = document.querySelector("#btns");
let buttonOrder = document.querySelector("#button_order");
let sendBtn = document.querySelector("#send_button");
let changeOrderBtn = document.querySelector("#change_button")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address")
let main = document.querySelector("main");
let section = document.querySelector("section");
document.querySelectorAll(".first").forEach(btn => {
    btn.addEventListener("click", function () {
        sectionBtn1.style.display = "grid";
        sectionBtn2.style.display = "none";
        sectionBtn3.style.display = "none";
    })
})
document.querySelectorAll(".second").forEach(btn => {
    btn.addEventListener("click", function () {
        sectionBtn1.style.display = "none";
        sectionBtn2.style.display = "grid";
        sectionBtn3.style.display = "none";
    })
})
document.querySelectorAll(".third").forEach(btn => {
    btn.addEventListener("click", function () {
        sectionBtn1.style.display = "none";
       sectionBtn2.style.display = "none";
        sectionBtn3.style.display = "grid";
    })
})
btns_top.forEach(btn => {
    btn.addEventListener("click", function (e) {
        btns_top.forEach(btn => btn.style.color = "rgba(255, 255, 255, 0.966)");
        e.target.style.color = "rgb(223, 183, 62)";

    })
})
drinks_btn.addEventListener("click", function () {
    menu_drinks.style.display = "block";
    menu_hot_meals.style.display = "none";
    menu_burgers.style.display = "none";
    menu_pasta.style.display = "none";
})
hot_meals_btn.addEventListener("click", function () {
    menu_drinks.style.display = "none";
    menu_hot_meals.style.display = "block";
    menu_burgers.style.display = "none";
    menu_pasta.style.display = "none";
})
burgers_btn.addEventListener("click", function () {
    menu_drinks.style.display = "none";
    menu_hot_meals.style.display = "none";
    menu_burgers.style.display = "block";
    menu_pasta.style.display = "none";
})
pasta_btn.addEventListener("click", function () {
    menu_drinks.style.display = "none";
    menu_hot_meals.style.display = "none";
    menu_burgers.style.display = "none";
    menu_pasta.style.display = "block";
})
order_btns.forEach(btn => btn.addEventListener("click", createDishesInOrder))

function createDishesInOrder() {
    this.style.display = "none";
    quantity = document.createElement("div");
    quantity.setAttribute('data-order', `${this.dataset.order}`)
    quantity.classList.add("quantity_btn");
    quantity.insertAdjacentHTML("afterbegin", '<i class="fa-solid fa-square-minus"></i>');
    quantityNumber = document.createElement("span");
    quantityNumber.classList.add("quantity_number");
    quantityNumber.textContent = 1;
    quantity.append(quantityNumber);
    quantity.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-square-plus"></i>');
    this.after(quantity);
    let div_order = document.createElement("div");
    div_order.classList.add("div_order");
    div_order.setAttribute('data-order', `${this.dataset.order}`)

    for (const img of order_imgs) {
        if (this.dataset.order == img.dataset.order) {
            let img_in_order = document.createElement("img");
            img_in_order.src = img.src;
            img_in_order.classList.add("img_in_order");
            div_order.append(img_in_order)

        }
    }
    let divInfoPosition = document.createElement("div");
    divInfoPosition.classList.add("info_position")
    for (const name of order_names) {
        if (this.dataset.order == name.dataset.order) {
            name_in_order = document.createElement("p");
            name_in_order.textContent = name.textContent;
            divInfoPosition.append(name_in_order);
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
            totalQuantity += Number(quantityNumber.textContent);
            document.querySelector(".basket_quantity").textContent = totalQuantity;
            quantity.append(quantityNumber);
            quantity.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-square-plus"></i>');
            divInfoPosition.append(quantity);
            price_in_order = document.createElement("span");
            price_in_order.textContent = price.textContent;
            let priceGood = price.querySelector(".price").textContent;
            price_in_order.setAttribute("data-price", priceGood);
            divInfoPosition.append(price_in_order);

            totalSum += Number(price_in_order.dataset.price);
            document.querySelector("#total_sum").textContent = "Total sum: $" + totalSum.toFixed(2)
        }
    }
    div_order.append(divInfoPosition);
    div_order.insertAdjacentHTML("beforeend", '<i id="xmark_block_order" class="fa-solid fa-xmark xmark"></i>')
    order_block.append(div_order);
    document.querySelectorAll("#xmark_block_order").forEach(xmark => xmark.addEventListener("click", deleteDishesFromBasket))
    document.querySelectorAll(".fa-square-minus")
        .forEach(min => min.addEventListener("click", delDishFromBasket))

    let pluses = document.querySelectorAll(".fa-square-plus")
    pluses.forEach(plus => plus.addEventListener("click", addToBasketDishes))
}
document.querySelector("#xmark_order").addEventListener("click", function () {
    order.style.display = "none"
})
basket.addEventListener("click", function () {
    if (document.querySelector("#order_block").childNodes.length < 1) {
        order.style.display = "none";
    }
    else if ((document.querySelector("#order_block").childNodes.length > 0) && (order.style.display == "none")) {
        order.style.display = "flex";
        main.style.opacity = 0.7;
        section.style.opacity = 0.7;
        document.querySelector("header").style.zIndex = "1";
        order.style.opacity = 1
    } else if (order.style.display == "flex") {
        order.style.display = "none";
        main.style.opacity = 1;
        section.style.opacity = 1;
    
    }
})
function addToBasketDishes() {
    const thisDataset = this.parentElement.dataset.order;
    const elementsInMenu = document.querySelectorAll(".quantity_btn");
    elementsInBasket = document.querySelectorAll(".quantity")
    const count = Number(this.previousElementSibling.textContent) + 1;
    for (const el of elementsInBasket) {
        if (el.dataset.order == thisDataset) {
            el.querySelector("span").textContent = count
        }
        for (const el of elementsInMenu) {
            if (el.dataset.order == thisDataset) {
                el.querySelector("span").textContent = count
            }
        }
        showInBasketQuantity()
    }
}
function delDishFromBasket() {
    if (this.nextElementSibling.textContent == 1) {
        return
    } else {
        const thisDataset = this.parentElement.dataset.order;
        elementsInBasket = document.querySelectorAll(".quantity")
        const elemsInMenu = document.querySelectorAll(".quantity_btn");
        const count = Number(this.nextElementSibling.textContent) - 1;
        for (const elem of elementsInBasket) {
            if (elem.dataset.order == thisDataset) {
                elem.querySelector("span").textContent = count;
            }
            showInBasketQuantity()
        }
        for (const elem of elemsInMenu) {
            if (elem.dataset.order == thisDataset) {
                elem.querySelector("span").textContent = count
            }
        }
    }
}
function showInBasketQuantity() {
    elementsInBasket = document.querySelectorAll(".quantity")
    totalQuantity = 0;
    totalSum = 0;
    for (const elem of elementsInBasket) {
        totalQuantity += Number(elem.querySelector("span").textContent)
        document.querySelector(".basket_quantity").textContent = totalQuantity;
        sumOrder = elem.querySelector(".quantity_number").textContent * elem.nextElementSibling.dataset.price;
        elem.nextElementSibling.textContent = "$" + sumOrder.toFixed(2);
        totalSum += sumOrder
        document.querySelector("#total_sum").textContent = "Total sum: $" + totalSum.toFixed(2)
    }
    if (document.querySelectorAll(".div_order").length < 1) {
        document.querySelector(".basket_quantity").textContent=0
        totalSum = 0;
    }
}
function deleteDishesFromBasket() {
    let dt = this.parentElement.dataset.order;
    order_btns.forEach(btn => {
        if (btn.dataset.order == dt ) {
            console.log(btn)
            btn.nextElementSibling.style.display = "none"
            btn.style.display = "block";
        }})
    this.parentElement.remove();
    showInBasketQuantity();
    if (order_block.innerHTML) {
        return
    } else {
        order.style.display = "none";

        main.style.opacity = 1;
        section.style.opacity = 1;
    }
}
buttonOrder.addEventListener("click", function () {
    document.querySelector("#form_order").style.display = "block";
    document.querySelector("#order_block").style.display = "none"
    order_btns.forEach(btn => btn.removeEventListener("click", createDishesInOrder));
    changeOrderBtn.style.display = "inline";
    sendBtn.style.display = "inline"
    changeOrderBtn.addEventListener("click", changeOrderInBasket)
    buttonOrder.style.display ="none"

})

 function changeOrderInBasket () {
    document.querySelector("#form_order").style.display = "none";
    document.querySelector("#order_block").style.display = "flex"
     order_btns.forEach(btn => btn.addEventListener("click", createDishesInOrder));
     changeOrderBtn.style.display = "inline";
     sendBtn.style.display = "none"
     buttonOrder.style.display = "inline"
}
sendBtn.addEventListener("click", sendOurOrder)
function sendOurOrder(e) {
    console.log(firstName.value.length)
    if(firstName.value.length < 2) {
        firstName.nextElementSibling.style.display = "block"
        e.preventDefault()
    } else if (lastName.value.length < 2) {
        lastName.nextElementSibling.style.display = "block"
        e.preventDefault()
    } else if (phone.value.length < 9) {
        phone.nextElementSibling.style.display = "block"
        e.preventDefault()
    } else if (address.value.length < 9) {
        address.nextElementSibling.style.display = "block"
        e.preventDefault()
    }  
    else {
        order.style.display = "none"
    }
}
firstName.addEventListener("input", inputData)
lastName.addEventListener("input", inputData)
phone.addEventListener("input", inputData)
address.addEventListener("input", inputData)
function inputData() {
    this.nextElementSibling.style.display = "none"
}
main.addEventListener("click", clickOutofOrder);
section.addEventListener("click", clickOutofOrder);
function clickOutofOrder() {
    order.style.display = "none";
    main.style.opacity = 1
    section.style.opacity = 1
}