const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("list");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransaction = [
    {id: 1,text: "flower" , amount: -20},
    {id: 2,text: "Salary" , amount: -20},
    {id: 3,text: "books" , amount: 60},
    {id: 4, text: "watch", amount: 70}
]
let transaction = dummyTransaction;

function addTransaction(transaction){
    const sign = transaction[2].amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(
        transaction[2].amount > 0 ? "plus" : "minus"
    )
    item.innerHTML = `${transaction[2].text} <span>${transaction[2].amount}</span><button class="delete-btn">X</button>`;
    list.appendChild(item);
}

const addTransactionButton = document.getElementById('btn');
addTransactionButton.addEventListener("click",addTransaction(transaction));