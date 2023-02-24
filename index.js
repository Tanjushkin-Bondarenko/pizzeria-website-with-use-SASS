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

    order_btns.forEach(btn => btn.addEventListener("click", function (e) {
        order.style.display = "flex";
        let div_order = document.createElement("div");
        div_order.classList.add("div_order");
        
        for (const img of order_imgs) {
            if (e.target.dataset.order == img.dataset.order) {
                let img_in_order = document.createElement("img");
                img_in_order.src = img.src;
                img_in_order.classList.add("img_in_order");
                div_order.append(img_in_order)

            }
        }
            for (const name of order_names) {
                if (e.target.dataset.order == name.dataset.order) {
                  name_in_order = document.createElement("p");
                    name_in_order.textContent = name.textContent;
                    name_in_order.classList.add("name_in_order");
                    div_order.append(name_in_order);
                }
            }

            for (const price of order_prices) {
                if (e.target.dataset.order == price.dataset.order) {
                    price_in_order = document.createElement("span");
                    price_in_order.textContent = price.textContent;
                    price_in_order.classList.add("price_in_order");
                    div_order.append(price_in_order);
                    
                }
        }
        
        let divQuantity = document.createElement("div")
        divQuantity.classList.add("quantity")
        divQuantity.insertAdjacentHTML("afterbegin", '<span>Quantity </span><input type="namber" value ="1" required>') 

        div_order.append(divQuantity);
        div_order.insertAdjacentHTML("afterbegin", '<i id="xmark_block_order" class="fa-solid fa-xmark xmark"></i>')
        order_block.append(div_order);
        
        let divTotal = document.createElement("div")
        divTotal.textContent += Number(document.querySelector(".price").textContent) * (document.querySelector("input").value)
        order_block.append(divTotal)
        document.querySelectorAll("#xmark_block_order").forEach(xmark => xmark.addEventListener("click", function (e) {
            e.target.parentElement.remove();
            if (order_block.innerHTML) {
                return
            } else {
                order.style.display = "none"
            }
            
        }))
        
    
}))

document.querySelector("#xmark_order").addEventListener("click", function () {
    order.style.display = "none"
})

