import { supplierDetails } from "../data/supplierDetails.js";
import { ourBankAccounts } from "../data/ourBankAccounts.js";
import { transactionHistory } from "../data/transactionHistory.js";
const inputDiv = document.getElementById("top");
const tableDiv = document.getElementById("bottom");
const placePaymentButton = document.getElementById("place-payment-button"); 

renderInputs();
renderTable();

function renderInputs() {
    let html = `
    <div id="payment-to">
            <label for="payment-to">Payment To:
                <select name="" id="supplier-selector"></select>
            </label>
            <label for="from-bank-account">From Bank Account:
                <select name="" id="bank-account-selector"></select>
            </label>
            <label for="bank-balance">Bank Balance:
                <input type="text" name="" id="bank-balance-input">
            </label>
        </div>
        <div id="date-paid">
            <label for="date-paid">Date Paid:
                <input type="date" name="" id="date-paid-input">
            </label>
            <label for="reference">Reference:
                <input type="text" name="" id="reference-input">
            </label>
        </div>
        <div id="bank-amount">
            <label for="bank-amount">Bank Amount:
                <input type="text" name="" id="bank-amount-input">
            </label>
            <label for="bank-charge">Bank Charge:
                <input type="text" name="" id="bank-charge-input">
            </label>
            <label for="dimension">Dimension:
                <select name="" id="dimension-selector"></select>
            </label>
        </div>
    `
    inputDiv.innerHTML = html;
}

function renderTable() {
    let html = `
    <table>
            <tr>
                <td>Amount of Discount</td>
                <td><input type="text" name="" id="discount-amount-input"></td>
            </tr>
            <tr>
                <td>Amount of Payment</td>
                <td><input type="text" name="" id="payment-amount-input"></td>
            </tr>
            <tr>
                <td>Memo:</td>
                <td><input type="text" name="" id="memo-input"></td>
            </tr>
        </table>
    `
    tableDiv.innerHTML = html;
}

const paymentTo = document.getElementById("supplier-selector");
const fromBankAccount = document.getElementById("bank-account-selector");
const bankBalance = document.getElementById("bank-balance-input");  
const datePaid = document.getElementById("date-paid-input");  
const reference = document.getElementById("reference-input");  
const bankAmount = document.getElementById("bank-amount-input");   
const bankCharge = document.getElementById("bank-charge-input");   
const dimensions = document.getElementById("dimension-selector");   
const discountAmount = document.getElementById("discount-amount-input");   
const paymentAmount = document.getElementById("payment-amount-input");   

supplierDetails.forEach(supplier => {
    paymentTo.add(new Option(supplier.supplier, supplier.supplier));
})

ourBankAccounts.forEach(bankAccount => {
    fromBankAccount.add(new Option(bankAccount.bankAccount, bankAccount.bankAccount));
})

const paymentToSupplierItems = [];

placePaymentButton.addEventListener('click', () => {
    paymentToSupplierItems.push({
        reference: reference.value,
        paymentTo: paymentTo.value,
        fromBankAccount: fromBankAccount.value,
        datePaid: datePaid.value,
        bankAmount: bankAmount.value,
        dimensions: dimensions.value,
        discountAmount: discountAmount.value,
        paymentAmount: paymentAmount.value,
    });

    transactionHistory.push(paymentToSupplierItems[paymentToSupplierItems.length - 1]);
    console.log(transactionHistory);


    // const groupedData = paymentToSupplierItems.reduce((acc, item) => {
    //     if (!acc[item.reference]) {
    //       acc[item.reference] = []; // Create a new array for this reference
    //     }
    //     acc[item.reference].push({
    //         paymentTo: item.paymentTo,
    //         fromBankAccount: item.fromBankAccount,
    //         bankBalance: item.bankBalance,
    //         datePaid: item.datePaid,
    //         bankAmount: item.bankAmount,
    //         bankCharge: item.bankCharge, 
    //         dimensions: item.dimensions,
    //         discountAmount: item.discountAmount,
    //         paymentAmount: item.paymentAmount,
    //     });
    //     return acc;
    //   }, {});
    
    //   // Prepare the data to be sent to the PHP script
    //   const dataToSend = {
    //     reference: Object.keys(groupedData), // Get the references
    //     items: groupedData, // Grouped items
    //   };
    
    //   console.log(dataToSend);
})

