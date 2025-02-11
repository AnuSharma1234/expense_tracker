const addTransactionButton = document.getElementById("btn");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const historyList = document.getElementById("list");
const totalBalance = document.getElementById("balance");
const income = document.getElementById("money-plus");
const expense = document.getElementById("money-minus");
const deleteTransactionButton = document.querySelector(".delete-btn");

const Transactions = [];

function addTransaction(event){
    event.preventDefault();
    const text = textInput.value.trim();
    const amount = amountInput.value;

    if(text == '' || isNaN(amount)){
        alert("Enter a valid description and amount!");
        return;
    }

    const transaction = {
        id: Date.now(),
        text,
        amount
    }
    Transactions.push(transaction);
    updateHistory(text,amount);
    clearInputs();
    updateUI();
}
function clearInputs(){
    textInput.value = '';
    amountInput.value = '';
}
function updateHistory(description , value){
    const sign = value >= 0 ? "+" : "-" ;
    const newTransaction = document.createElement("li");
    newTransaction.className = value >= 0 ? "plus" : "minus";
    newTransaction.innerHTML = `${description} <span>${sign}$${Math.abs(value)}</span> <button class = "delete-btn">X</button>`;
    historyList.appendChild(newTransaction);
}
function updateUI(){
    const amounts = Transactions.map(transaction => transaction.amount);
    const updatedBalance = parseInt(amounts.reduce((acc,item)=> (acc+=item),0)).toFixed(2);
    totalBalance.innerHTML = `${updatedBalance}`;

    const incomeArray = amounts.filter((amount)=> amount >= 0);
    const updatedIncome = parseInt(incomeArray.reduce((acc,item)=> acc += item,0)).toFixed(2);
    income.innerHTML = `+$${updatedIncome}`;

    const expenseArray = amounts.filter((amount) => amount < 0);
    const updatedExpense = parseInt(expenseArray.reduce((acc,item) => acc += item),0).toFixed(2);
    expense.innerHTML = `-$${Math.abs(updatedExpense)}`;
}
addTransactionButton.addEventListener("click",addTransaction);