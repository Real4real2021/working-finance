import { inventoryData } from "../data/inventory.js";

const tableDiv = document.querySelector(".rendered-table");

renderTableGeneralSettings();


function renderTableGeneralSettings() {
  let HTML = `
   <table class="general-settings customer-info">
        <th>General Settings</th>
        <tbody>
            <tr>
                <td>Item Code: <input type="text" class="item-code"></td>
            </tr>
            <tr>
                <td>Name: <input type="text" class="general-settings-name"> </td>
            </tr>
            <tr>
                <td>Description: <input type="text" class="description-input"> </td>
            </tr>
            <tr>
                <td> Category: <select name="" id="category-selector">
                    <option selected value="components">Components</option>
                    <option value="charges">Charges</option>
                    <option value="systems">Systems</option>
                    <option value="services">services</option>
                </select> </td>
            </tr>
            <tr>
                <td>Item Tax Type: <select id="tax-type-selector">
                    <option value="regular">Regular</option>
                </select> </td>
            </tr>
            <tr>
                <td>Item Type: <select id="item-type-selector">
                    <option value="manufactured">Manufactured</option>
                    <option selected value="purchased">Purchased</option>
                    <option value="service">Service</option>
                </select></td>
            </tr>
            <tr>
                <td>Units of Measure: <select id="unit-of-measure-selector">
                    <option value="each">Each</option>
                    <option value="hour">Hour</option>
                </select></td>
            </tr>
            <tr>
                <td>Editable Description: <input type="text" selected class="editable-description-input"></td>
            </tr>
            <tr>
                <td>Exclude from Sales: <input type="text" class="exclude-from-sales-input"></td>
            </tr>
            <tr>
                <td>Exclude from Purchases: <input type="text" class="exclude-from-purchases-input"></td>
            </tr>
        </tbody>
    </table>

    <div class="customer-info">
        <table class="dimensions customer-info">
            <th>Dimensions</th>
              <tbody>
                <tr>
                    <td>Dimension 1: <select name="dimensions" id="dimensions">
                        <option value="cost-centre">08/2024Cost Centre</option>
                        <option value="cost">08/2024Cost Centre</option>
                    </select></td>
                </tr>
              </tbody>
        </table><br><br>
    </div>

    <div class="customer-info">
        <table class="gl-accounts customer-info">
            <th>GL Accounts</th>
            <tbody>
              <tr>
                  <td>Sales Account: <select name="sales-accounts" id="sales-accounts-selector">
                      <option value="checking-account">1060 Checking Account</option>
                      <option value="petty-cash">1065 Petty Cash</option>
                      <option value="allowance-for-doubtful-accounts">1205 Allowance for Doubtful Accounts</option>
                      <option value="inventory">Inventory</option>
                      <option value="stocks-of-raw-materials">Stocks of Raw Materials</option>
                      <option value="stocks-of-work-in-progress">Stocks of Work in Progress</option>
                      <option value="stocks-of-finished-goods">Stocks of Finished Goods</option>
                      <option value="goods-received-clearing-account">Goods Received Clearing Account</option>
                      <option value="office-furniture-equipment">Office Furniture and Equipment</option>
                      <option value="accum-amort-furn-equip">Accum. Amort, -Furn, & Equip</option>
                      <option value="vehicle">Vehicle</option>
                      <option value="accum-amort-vehicle">Accum. Amort. -Vehicle</option>
                      <option value="accounts-payable">Accounts-Payable</option>
                      <option value="deferred-income">Deferred Income</option>
                      <option value="accrued-tax-federal">Accrued Tax - Federal</option>
                  </select></td>
              </tr>
              <tr>
                  <td>Inventory Account: <select name="inventory-accounts" id="inventory-accounts-selector">
                      <option value="checking-account">1060 Checking Account</option>
                      <option value="petty-cash">1065 Petty Cash</option>
                      <option value="allowance-for-doubtful-accounts">1205 Allowance for Doubtful Accounts</option>
                      <option value="inventory">Inventory</option>
                      <option value="stocks-of-raw-materials">Stocks of Raw Materials</option>
                      <option value="stocks-of-work-in-progress">Stocks of Work in Progress</option>
                      <option value="stocks-of-finished-goods">Stocks of Finished Goods</option>
                      <option value="goods-received-clearing-account">Goods Received Clearing Account</option>
                      <option value="office-furniture-equipment">Office Furniture and Equipment</option>
                      <option value="accum-amort-furn-equip">Accum. Amort, -Furn, & Equip</option>
                      <option value="vehicle">Vehicle</option>
                      <option value="accum-amort-vehicle">Accum. Amort. -Vehicle</option>
                      <option value="accounts-payable">Accounts-Payable</option>
                      <option value="deferred-income">Deferred Income</option>
                      <option value="accrued-tax-federal">Accrued Tax - Federal</option>
                  </select></td>
              </tr>
              <tr>
                  <td>C.O.G.S. Accounts: <select name="cogs-accounts" id="cogs-accounts-selector">
                      <option value="checking-account">1060 Checking Account</option>
                      <option value="petty-cash">1065 Petty Cash</option>
                      <option value="allowance-for-doubtful-accounts">1205 Allowance for Doubtful Accounts</option>
                      <option value="inventory">Inventory</option>
                      <option value="stocks-of-raw-materials">Stocks of Raw Materials</option>
                      <option value="stocks-of-work-in-progress">Stocks of Work in Progress</option>
                      <option value="stocks-of-finished-goods">Stocks of Finished Goods</option>
                      <option value="goods-received-clearing-account">Goods Received Clearing Account</option>
                      <option value="office-furniture-equipment">Office Furniture and Equipment</option>
                      <option value="accum-amort-furn-equip">Accum. Amort, -Furn, & Equip</option>
                      <option value="vehicle">Vehicle</option>
                      <option value="accum-amort-vehicle">Accum. Amort. -Vehicle</option>
                      <option value="accounts-payable">Accounts-Payable</option>
                      <option value="deferred-income">Deferred Income</option>
                      <option value="accrued-tax-federal">Accrued Tax - Federal</option>
                  </select></td>
              </tr>
              <tr>
                  <td>Inventory Adjustments Accounts: <select name="inventory-adjustment-accounts" id="inventory-adjustments-accounts">
                      <option value="checking-account">1060 Checking Account</option>
                      <option value="petty-cash">1065 Petty Cash</option>
                      <option value="allowance-for-doubtful-accounts">1205 Allowance for Doubtful Accounts</option>
                      <option value="inventory">Inventory</option>
                      <option value="stocks-of-raw-materials">Stocks of Raw Materials</option>
                      <option value="stocks-of-work-in-progress">Stocks of Work in Progress</option>
                      <option value="stocks-of-finished-goods">Stocks of Finished Goods</option>
                      <option value="goods-received-clearing-account">Goods Received Clearing Account</option>
                      <option value="office-furniture-equipment">Office Furniture and Equipment</option>
                      <option value="accum-amort-furn-equip">Accum. Amort, -Furn, & Equip</option>
                      <option value="vehicle">Vehicle</option>
                      <option value="accum-amort-vehicle">Accum. Amort. -Vehicle</option>
                      <option value="accounts-payable">Accounts-Payable</option>
                      <option value="deferred-income">Deferred Income</option>
                      <option value="accrued-tax-federal">Accrued Tax - Federal</option>
                  </select></td>
              </tr>
            </tbody>
        </table><br><br>
    </div>

    <div class="customer-info">    
        <table class="other customer-info">
            <th>Other</th>
            <tr>
                <td>Image File (.jpg): <input type="image" value="Choose Image"></td>
            </tr>
            <tr>
                <td>Delete Image: <input type="radio"></td>
            </tr>
            <tr>
                <td>Item Status: <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select></td>
            </tr>
        </table>
    </div>
    <div>
        <input type="button" id="submit-button" class="submit-button" value="Submit">
    </div>
   
   `;
  tableDiv.innerHTML = HTML;
}


const itemCodeInput = document.querySelector(".item-code");
const generalSettingsNameInput = document.querySelector(".general-settings-name");
const descriptionInput = document.querySelector(".description-input");
const categorySelector = document.getElementById("category-selector");
const taxTypeSelector = document.getElementById("tax-type-selector");
const itemTypeSelector = document.getElementById("item-type-selector");
const unitOfMeasureSelector = document.getElementById(
  "unit-of-measure-selector"
);
const editableDescriptionInput = document.querySelector('.editable-description-input');
const excludeFromSalesInput = document.querySelector('.exclude-from-sales-input');
const excludeFromPurchasesInput = document.querySelector('.exclude-from-purchases-input');
const dimensionsSelector = document.getElementById('dimensions');
const salesAccountsSelector = document.getElementById(
  "sales-accounts-selector"
);
const inventoryAccountsSelector = document.getElementById(
  "inventory-accounts-selector"
);
const cogsAccountsSelector = document.getElementById("cogs-accounts-selector");
const inventoryAdjustmentAccountSelector = document.getElementById("inventory-adjustments-accounts");
const submitButton = document.getElementById("submit-button");

let itemData = JSON.parse(localStorage.getItem("itemData")) || [];

submitButton.addEventListener("click", () => {
    addItem();
});

function addItem(){

    const newItemData = {
      itemCode: itemCodeInput.value,
      generalSettingsName: generalSettingsNameInput.value,
      description: descriptionInput.value,
      category: categorySelector.value,
      taxType: taxTypeSelector.value,
      itemType: itemTypeSelector.value,
      unitOfMeasure: unitOfMeasureSelector.value,
      editableDescription: editableDescriptionInput.value,
      excludeFromSales: excludeFromSalesInput.value,
      excludeFromPurchases: excludeFromPurchasesInput.value,
      dimensions: dimensionsSelector.value,
      salesAccounts: salesAccountsSelector.value,
      inventoryAccounts: inventoryAccountsSelector.value,
      cogsAccounts: cogsAccountsSelector.value,
      inventoryAdjustmentAccounts: inventoryAdjustmentAccountSelector.value,
    }

    itemData.push(newItemData);
    localStorage.setItem("itemData", JSON.stringify(itemData) );
    console.log(itemData);
}
export const ItemData = JSON.parse(localStorage.getItem("newInventoryData"));
console.log(ItemData);

