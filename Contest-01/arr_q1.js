const arr = [[1,2,3,4], [5,6,7,8], [10,4,2,1], [1], [-10, 8]];
let arr2 = []

for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j];
        if (sum < 0){
            arr2[i] = 0;
        }
        else{
            arr2[i] = sum;
        }
    }
}

console.log(arr2)