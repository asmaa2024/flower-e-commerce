let add1 = document.getElementById("add-1");
let price1 = document.getElementById("price-1"); 
let totalPrice = document.getElementById("total-price");


console.log(Number(price1.innerText.split("$")[1]));

add1.addEventListener('click' ,()=> {
    let price = Number(price1.innerText.split("$")[1]);
    let total = Number(totalPrice.innerText);
    totalPrice.innerText =  price + total;
});

let remo1 = document.getElementById("remove-1");

remo1.addEventListener('click' ,()=> {
    let price = Number(price1.innerText.split("$")[1]);
    let total = Number(totalPrice.innerText);
    totalPrice.innerText =  total - price;
});

// up button

let upBtn = document.querySelector(".up");
window.onscroll = function () {
    if (this.scrollY >= 500) {
        upBtn.classList.add("show");
    }else{
        upBtn.classList.remove("show");
    }
};

upBtn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}