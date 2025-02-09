const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("list");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const submitButton = document.getElementById("btn");
const deleteButton = document.querySelector(".delete-btn");

let Transactions = [];
var i = 0;

function updateUI(){
    
}
function addTransaction(event){
    event.preventDefault();
    const text = textInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if(text = '' || isNaN(amount)){
        alert("Enter a valid text and description");
    }
    
    const transaction = {
        id: i,
        text,
        amount
    };
    i++;

    Transactions.push(transaction);
    updateUI();

}