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
let pluses = document.querySelectorAll(".fa-square-plus");
let minuses = document.querySelectorAll(".fa-square-minus");
let saveDish;
let saveFoto;
let saveName;
let saveQuantity;
let savePrice;
let savePriceOrder;
let saveTotalPrice;
let key;
let dishs;
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

minuses.forEach(min => min.addEventListener("click", delDishFromBasket))

document.querySelector("#xmark_order").addEventListener("click", function () {
    order.style.display = "none";
    main.style.opacity = 1;
    section.style.opacity = 1;
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

function showInBasketQuantity() {
    elementsInBasket = document.querySelectorAll(".quantity")
    totalQuantity = 0;
    totalSum = JSON.parse(localStorage.getItem("totalPrice"));
    let totalSumNum = Number(totalSum);
    document.querySelector("#total_sum").textContent = "Total sum: $"+totalSumNum.toFixed(2)
    
 
    for (const elem of elementsInBasket) {
        totalQuantity += Number(elem.querySelector("span").textContent)
        document.querySelector(".basket_quantity").textContent = totalQuantity;
        
        localStorage.setItem("basketQuantity",JSON.stringify(totalQuantity))
    }
    if (document.querySelectorAll(".div_order").length < 1) {
        document.querySelector(".basket_quantity").textContent=0
        totalSum = 0;
        localStorage.clear()
    }
}
function deleteDishesFromBasket() {
    let dt = this.parentElement.dataset.order;
    order_btns.forEach(btn => {
        if (btn.dataset.order == dt ) {
            
            btn.nextElementSibling.style.display = "none"
            btn.style.display = "block";
            localStorage.removeItem(dt)
        }})
    this.parentElement.remove();
    showInBasketQuantity();
    if (order_block.innerHTML) {
        return
    } else {
        order.style.display = "none";
        localStorage.clear()
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