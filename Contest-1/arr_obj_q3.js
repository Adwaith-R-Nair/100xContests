const input = { a: 0, b: null, c: "hello", d: undefined, e: 5 };

const partial_output = Object.entries(input);

const output = [];
// console.log(partial_output)

for(let i = 0; i < partial_output.length; i++){
    const [key, value] = partial_output[i];
    if (value){
        output.push([key, value])
    }
}

const final_output = Object.fromEntries(output);
console.log(final_output);