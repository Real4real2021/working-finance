import { paymentClasses } from "../data/paymentClasses.js";
import { ourBankAccounts } from "../data/ourBankAccounts.js";
// import { transactionHistory } from "../data/transactionHistory.js";

const inputDiv = document.getElementById("input-div");
const tableDiv = document.getElementById("table-div");

renderInputs();

function renderInputs() {
    let html = `
    <div id="first-section">
            <label for="date">Date:
                <input type="date" name="" id="date-input">
            </label>
            <label for="reference">Reference:
                <input type="text" name="" id="reference-input">
            </label>
        </div>
        <div id="second-section">
            <label for="payment-type">Payment Type:
                <select name="payment-type-selector" id="payment-type-selector"></select>
            </label>
            <label for="from">From:
                <select name="from-selector" id="from-selector"></select>
            </label>
            <label for="amount">Amount:
                <input type="text" name="" id="amount-input">
            </label>
        </div>
    `
    inputDiv.innerHTML = html;
}

function renderTable() {
    let html = `
     <div id="table-div">
        <table class="table">
            <th>Account Code</th>
            <th>Account Description</th>
            <th>Dimension</th>
            <th>Amount</th>
            <th>Memo</th>
            <tbody>
                <tr>
                    <td><input type="text" name="" id="account-code-input"></td>
                    <td><select name="" id="account-description-selector"></select></td>
                    <td><select name="" id="dimension-selector"></select></td>
                    <td><input type="text" name="" id="amount-input"></td>
                    <td><input type="text" name="" id="memo-input"></td>
                    <td><input type="button" value="Add Item" id="add-item-button"></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
    tableDiv.innerHTML = html;
}

const dateInput = document.getElementById("date-input");
const referenceInput = document.getElementById("reference-input");
const paymentTypeSelector = document.getElementById("payment-type-selector");
const fromSelector = document.getElementById("from-selector");
const amountInput = document.getElementById("amount-input");

let bankAccountPayment = JSON.parse(localStorage.getItem("bankAccountPayment")) || [];

paymentClasses.forEach(paymentClass => {
    paymentTypeSelector.add(new Option(paymentClass.paymentClass, paymentClass.paymentClass));
})

ourBankAccounts.forEach(bankAccount=>{
    fromSelector.add(new Option(bankAccount.bankAccount, bankAccount.bankAccount));
})

const payments = [];

const processPaymentButton = document.getElementById("process-payment-button");

processPaymentButton.addEventListener("click", () => {
    payments.push({
        date: dateInput.value,
        reference: referenceInput.value,
        paymentType: paymentTypeSelector.value,
        from: fromSelector.value,
        amount: amountInput.value,
    })

    bankAccountPayment.push(payments[payments.length - 1]);
    localStorage.setItem("bankAccountPayment", JSON.stringify(bankAccountPayment));
    console.log(bankAccountPayment);
})