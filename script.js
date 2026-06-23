// Order Popup Open
function openOrderForm(flavour){

    document.getElementById("orderPopup").style.display = "flex";

    document.getElementById("flavour").value = flavour;

}

// Order Popup Close
function closeOrderForm(){

    document.getElementById("orderPopup").style.display = "none";

}

// Search Functionality
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let name = card.querySelector("h2").innerText.toLowerCase();

        if(name.includes(value)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});

// Heart Icon Functionality
const hearts = document.querySelectorAll(".heart");

hearts.forEach(function(item){

    item.addEventListener("click", function(){

        this.classList.toggle("active");

        if(this.classList.contains("active")){

            this.style.color = "deeppink";

        }

        else{

            this.style.color = "red";

        }

    });

});

// Order Form Submit
document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("orderForm").addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("customerName").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;
        let flavour = document.getElementById("flavour").value;
        let quantity = document.getElementById("quantity").value;

        let total = quantity * 150;

let orderId = "IC" + Math.floor(100000 + Math.random() * 900000);

document.getElementById("orderId").innerHTML =
"🆔 Order ID : <b>" + orderId + "</b>";

document.getElementById("orderDetails").innerHTML =
"🍦 " + flavour + " x " + quantity;

document.getElementById("billAmount").innerHTML =
"💰 Total Bill : <b>₹" + total + "</b>";

document.getElementById("successPopup").style.display = "flex";

document.querySelector(".confetti").style.display = "block";

        document.getElementById("orderForm").reset();

        closeOrderForm();

    });

});
function closeSuccessPopup() {

    document.getElementById("successPopup").style.display = "none";

    document.querySelector(".confetti").style.display = "none";

}

function trackOrder() {

    alert("🚚 Your order is being prepared.\nEstimated Delivery: 20-30 Minutes.");

}