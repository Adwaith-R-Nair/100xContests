const api_res = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

const users = {};

for(let i = 0; i < api_res.length; i++){
    const {id, name} = api_res[i];
    // console.log(id)
    // console.log(name)
    users[id] = name;
}
console.log(users);