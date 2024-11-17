import { paymentClasses } from "../data/paymentClasses.js";

const paymentClassInput = document.getElementById("payment-class-input");
const descriptionInput = document.getElementById("description-input");
const amountInput = document.getElementById("amount-input");
const discountInput = document.getElementById("discount-input");
const totalInput = document.getElementById("total-input");
const addPaymentClassButton = document.getElementById("add-payment-class-button");

const NewPaymentClass = [];

addPaymentClassButton.addEventListener("click", () => {
    paymentClasses.push({
        paymentClass: paymentClassInput.value,
        description: descriptionInput.value,
        amount: amountInput.value,
        discount: discountInput.value,
        total: totalInput.value,
    })
    console.log(paymentClasses);
});
