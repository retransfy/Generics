document.getElementById("currency").addEventListener("change", function () {
const currency = this.value;

const buyInput = document.getElementById("buyBN");
const sellInput = document.getElementById("sellBN");
const amountInput = document.getElementById("amount");
const payingInput = document.getElementById("paying");


if (currency === "GHS") {
buyInput.value = "656.1";
sellInput.value = "12";
amountInput.value = "1500";
payingInput.value = "18";
} else if (currency === "FCFA") {
buyInput.value = "12.02";
sellInput.value = "656.1";
amountInput.value = "24";
payingInput.value = "1000";
}
});



function calculateRate(event){
event.preventDefault();
const Currency = document.getElementById("currency").value;
const Buy = document.getElementById("buyBN");
const BuyInput = parseFloat(Buy.value);
const Sell = document.getElementById("sellBN");
const SellInput = parseFloat(Sell.value);
const amountEl = document.getElementById("amount");
const amount = parseFloat(amountEl.value);
const payingEl = document.getElementById("paying");
const paying = parseFloat(payingEl.value);
const rate = document.getElementById("showrate");
const pnl = document.getElementById("pnl");
let amountToReceiveEl = 0;
let rateEl = 0;
let pnlEl = 0;
let other = 0;

if (Currency === "FCFA" && BuyInput && SellInput && amount && paying){
rateEl = (1000 * BuyInput) / SellInput;
amountToReceiveEl = Math.round((amount / rateEl) * 1000);
pnlEl = Math.round(amountToReceiveEl - paying);
other = Math.round(pnlEl / 1000 * rateEl);

rate.style.display = "block";
rate.textContent = `${rateEl.toFixed(2)} | ${amountToReceiveEl.toLocaleString('fr-FR')} FCFA`;

pnl.style.display = "block";
pnl.textContent = `${pnlEl.toLocaleString('fr-FR')} FCFA | ${other.toFixed(2)} GHS`;
}

else if (Currency === "GHS" && BuyInput && SellInput && amount && paying){
rateEl = ((1000 * SellInput) / BuyInput);
amountToReceiveEl = ((amount / 1000) * rateEl);
pnlEl = amountToReceiveEl - paying;
other = Math.round(pnlEl * 1000 / rateEl);

rate.style.display = "block";
rate.textContent = `${rateEl.toFixed(2)} | ${amountToReceiveEl.toFixed(2)} GHS`;

pnl.style.display = "block"
pnl.textContent = `${pnlEl.toFixed(2)} GHS | ${other.toLocaleString('fr-FR')} FCFA`;
}
}


const refreshEL = document.getElementById("refresh");
refreshEL.addEventListener("click", () => {
    location.reload();
});
