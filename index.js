let header1 = document.querySelector("#header1");
let header2 = document.querySelector("#header2");
let header3 = document.querySelector("#header3")

document.querySelectorAll(".first").forEach(btn => {
    btn.addEventListener("click", function () {
        header1.style.display = "grid";
        header2.style.display = "none";
        header3.style.display = "none";
    })
})
document.querySelectorAll(".second").forEach(btn => {
    btn.addEventListener("click", function () {
        header1.style.display = "none";
        header2.style.display = "grid";
        header3.style.display = "none";
    })
})
document.querySelectorAll(".third").forEach(btn => {
    btn.addEventListener("click", function () {
        header1.style.display = "none";
        header2.style.display = "none";
        header3.style.display = "grid";
    })
})