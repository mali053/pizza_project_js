
const pay = document.querySelector('#pay');

const forPayment = document.getElementById('forPayment');
forPayment.innerHTML = 'לתשלום: ' + sessionStorage.getItem('forPay') + '₪';

const cash = document.getElementById('cash');
const permitCash = document.getElementById('permitCash');
var i = 0;
cash.onclick = () => {
    permitCash.style.visibility = "visible";
    ccForm.style.visibility = "hidden"; 
    permitCredit.style.visibility = "hidden"; 
}

permitCash.onclick = () => {
    permitCash.style.visibility = "hidden";
    window.location.href = "./end.html"
}

const credit = document.getElementById('credit');
const ccForm = document.getElementById('ccForm');
const permitCredit = document.getElementById('permitCredit');

var j=0;
credit.onclick = () => {
    ccForm.style.visibility = "visible"; 
    permitCash.style.visibility = "hidden"; 
    permitCredit.style.visibility = "visible";  
};

permitCredit.onclick = () =>{
    window.location.href = "./end.html"
}
