import { inventoryData } from "../data/inventory.js";
import  { transactionHistory } from "../data/transactionHistory.js";

const inputDiv = document.querySelector(".input-div");
const tableDiv = document.querySelector(".mid-third");

renderInputs();
// renderTable();
//INPUT DIV
const customerSelector = document.getElementById("customer-selector");
const branchSelector = document.getElementById("branch-selector");
const bankAccountSelector = document.getElementById("bank-account-selector");
const dateInput = document.getElementById("date-input");
const referanceInput = document.getElementById("referance-input");
const bankChargeInput = document.getElementById("bank-charge-input");
const dimensionsSelector = document.getElementById("dimensions-selector");
//TABLE DIV
const amountOfDiscount = document.getElementById("amount-of-discount");
const amount = document.getElementById("amount");
const memo = document.getElementById("memo");
const itemSelector = document.getElementById("item-selector");
const addPaymentButton = document.getElementById("add-payment-button");

inventoryData.forEach(item => {
    itemSelector.add(new Option(item.item, item.item));
})

function renderInputs() {
  let html = `
    <div class="customer-info">
            <label for="from-customer">From Customer:
                <select name="customer-selector" id="customer-selector">
                    <option value="customer-1">Customer 1</option>
                    <option value="customer-2">Customer 2</option>
                    <option value="customer-3">Customer 3</option>
                </select>
            </label>
            <label for="branch">Branch:
                <select name="branch" id="branch-selector">
                    <option value="branch-1">Branch 1</option>
                    <option value="branch-2">Branch 2</option>
                </select>
            </label>
            <label for="bank-account">Bank Account:
                <select name="bank-account" id="bank-account-selector">
                    <option value="account-1">Account 1</option>
                    <option value="account-2">Account 2</option>
                    <option value="account-3">Account 3</option>
                </select>
            </label><br>
            <label for="item-selector">Select Item form Inventory:
                <select name="item-selector" id="item-selector">
                    
                </select>
            </label>
        </div>
        <div class="credit-and-discount">
            <label for="date-of-deposit">Date of Deposit:
                <input type="date" id="date-input">
            </label>
            <label for="referance">Reference:
                <input type="text" id="referance-input">
            </label>
        </div>
        <div class="customer-info">
            <label for="bank-charge">Bank Charge:
                <input type="text" name="bank-charge" id="bank-charge-input">
            </label>
            <label for="dimensions">Dimensions:
                <select name="dimensions" id="dimensions-selector">
                    <option value="dim-1">Dim 1</option>
                    <option value="dim-2">Dim 2</option>
                    <option value="dim-3">Dim 3</option>
                </select>
            </label>
        </div>
    `;
  inputDiv.innerHTML = html;
}

const customerPaymentData = []

addPaymentButton.addEventListener("click", () => {
    for(let i = 0; i < inventoryData.length; i++){
        if(inventoryData[i].item == itemSelector.value && inventoryData[i].quantity > 0){
            console.log(inventoryData[i].quantity);
            inventoryData[i].quantity--;
            console.log(inventoryData[i].quantity);
            break;
        }else{
            alert("Item not available in inventory");
            return;
        }
    }
        customerPaymentData.push( {
          customer: customerSelector.value,
          branch: branchSelector.value,
          accountType: bankAccountSelector.value,
          item: itemSelector.value,
          date: dateInput.value,
          referance: referanceInput.value,
          bankCharge: bankChargeInput.value,
        })
        transactionHistory.push(customerPaymentData[customerPaymentData.length - 1]);
        console.log(transactionHistory);
        localStorage.setItem("NewCustomerPaymentData", JSON.stringify(customerPaymentData) ); 
        renderReceipt();
});

const newCustomerPaymentData = JSON.parse(localStorage.getItem("NewCustomerPaymentData"));

function renderReceipt() {

    const latestTransaction = customerPaymentData[customerPaymentData.length - 1];

    const html = `
      <h1>${latestTransaction.customer}</h1>
      <div class="date-and-receipt-number align-right">
          <label for="date">Date: ${latestTransaction.date}</label><br>
          <label for="receipt-no">Receipt No: ${latestTransaction.referance}</label>
      </div>
      <div class="to-and-from">
          <label for="from">From: ${latestTransaction.customer}</label><br>
          <label for="to" class="align-right">To: <p class="align-right">Company/Customer</p></label>
      </div>
      <div class="payment-details-table">
          <table>
              <thead>
                  <tr>
                      <th>Customer's Reference</th>
                      <th>Type</th>
                      <th>Your VAT no.</th>
                      <th>Our Order NO</th>
                      <th>Due Date</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>${latestTransaction.customer}</td>
                      <td>Customer Payment</td>
                      <td>123456789</td>
                      <td></td>
                      <td>${latestTransaction.date}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="payment-terms">
          <label for="payment-terms">Payment Terms: Cash Only</label>
      </div>
      <div class="full-payment-summary">
          <table>
              <thead>
                  <tr>
                      <th>Trans Type</th>
                      <th>#</th>
                      <th>Date</th>
                      <th>Total Amount</th>
                      <th>Left to Allocate</th>
                      <th>This Allocation</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>As Advance/full/part/payment towards</td>
                      <td>${latestTransaction.referance}</td>
                      <td>${latestTransaction.date}</td>
                      <td>${latestTransaction.amountOfDiscount}</td>
                      <td>0</td>
                      <td>${latestTransaction.amountOfDiscount}</td>
                  </tr>
                  <tr>
                      <td colspan="5" style="text-align: right;">Total</td>
                      <td>${latestTransaction.amountOfDiscount}</td>
                  </tr>
              </tbody>
          </table>
      </div>
    `;
    // Open a new window with the receipt content
    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write('<html><head><title>Receipt</title></head><body>');
    receiptWindow.document.write(html);
    receiptWindow.document.write('</body></html>');
    receiptWindow.document.close();
    receiptWindow.print();
}


