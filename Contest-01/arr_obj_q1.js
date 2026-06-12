const transactions = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
];

// console.log(transactions[0].amount)
// console.log(transactions[0].user)

const user_transactions = {}

for(let i = 0; i < transactions.length; i++){
    const {user, amount} = transactions[i];
    if (user_transactions[user]){
        user_transactions[user] += amount;
    }
    else{
        user_transactions[user] = amount;
    }
}

console.log(user_transactions);

