const orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

// console.log(transactions[0].amount)
// console.log(transactions[0].user)

const revenue = {};

for(let i = 0; i < orders.length; i++){
    const {category, price} = orders[i];
    if (revenue[category]){
        revenue[category] += price;
    }
    else{
        revenue[category] = price;
    }
}

console.log(revenue);

