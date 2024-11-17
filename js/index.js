import { transactionHistory } from "../data/transactionHistory.js";

const table = document.getElementById("trail-balance");

transactionHistory.forEach(transaction=>{
    if (transaction.transactionType === "sale"){
        table.innerHTML += `
        <tr>
            <td>${transaction.customer}</td>
            <td>${transaction.branch}</td>
            <td>${transaction.accountType}</td>
            <td>${transaction.date}</td>
            <td>${transaction.referance}</td>
            <td>${transaction.bankCharge}</td>
            <td>${transaction.dimensions}</td>
            <td>${transaction.amountOfDiscount}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.memo}</td>
            <td>Debit</td>
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
            <td>${transaction.bankCharge}</td>
            <td>${transaction.dimensions}</td>
            <td>${transaction.amountOfDiscount}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.memo}</td>
            <td></td>
            <td>Credit</td>
        </tr>
        `
    }
    
})