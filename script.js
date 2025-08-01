const menu = document.querySelector("#menu");
const nav = document.querySelector("#navbar");
const cls = document.querySelector("#close");
const product = document.querySelectorAll(".product");

if(menu){
    menu.addEventListener("click",()=>{
        nav.classList.add('active');
    })
}
if(cls){
    cls.addEventListener("click",()=>{
        nav.classList.remove("active");
    })
}

product.forEach(item => {
    item.addEventListener("click",()=>{
        window.location.href="sproduct.html";
    })
})