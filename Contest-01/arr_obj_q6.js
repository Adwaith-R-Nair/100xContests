const items = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];

const uniqueItems = [];
const seen = {};

for (let i = 0; i < items.length; i++){
    const currentItem = items[i];
    const {id} = currentItem;

    if (!seen[id]){
        seen[id] = true;
        uniqueItems.push(currentItem);
    }
}

console.log(uniqueItems);