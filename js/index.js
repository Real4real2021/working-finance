// import { transactionHistory } from "../data/transactionHistory.js";

const retrievedTransactionHistory = JSON.parse(localStorage.getItem("transactionHistory")) || [];
const retrievedPaymentTransactionHistory = JSON.parse(localStorage.getItem("paymentTransactionHistory")) || [];
const retrievedBankAccountPayment = JSON.parse(localStorage.getItem("bankAccountPayment")) || [];
const table = document.getElementById("trail-balance");

retrievedTransactionHistory.forEach(transaction=>{
    if (transaction.transactionType === "sale"){
        table.innerHTML += `
        <tr>
            <td>${transaction.transactionType}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${transaction.bankCharge}</td>
        </tr>
        
        `
    }else{
        table.innerHTML += `
        <tr>
            <td>${transaction.customer}</td>
            <td>${transaction.branch}</td>
            <td>${transaction.accountType}</td>
            <td>${transaction.date}</td>
            <td>${transaction.referance}</td>
            <td>${transaction.amountOfDiscount}</td>
            <td>${transaction.amount}</td>
            <td></td>
            <td>Credit</td>
        </tr>
        `
    }
    
})

retrievedPaymentTransactionHistory.forEach(transaction=>{
    if (transaction.transactionType === "sale"){
        table.innerHTML += `
        <tr>
            <td>${transaction.paymentTo}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Debit</td>
        </tr>
        
        `
    }else{
        table.innerHTML += `
        <tr>
            <td>${transaction.paymentTo}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${transaction.paymentAmount}</td>
        </tr>
        `
    }  
})

retrievedBankAccountPayment.forEach(transaction=>{
    if (transaction.paymentType === "sale"){
        table.innerHTML += `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>${transaction.paymentType}</td>
            <td></td>
            <td>Debit</td>
        </tr>
        
        `
    }else{
        table.innerHTML += `
        <tr>
        <td>${transaction.paymentType}</td>
        <td></td>
        <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${transaction.amount}</td>
        </tr>
        `
    }  
})