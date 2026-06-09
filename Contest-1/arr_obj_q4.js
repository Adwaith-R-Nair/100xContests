const roles={ admin:["read","write"], user:["read"], staff: ["write"]};
const checkRole="user";
const action="write";

let hasPermission = false;
const permissions = roles[checkRole];

if (permissions){
    for (let i = 0; i < permissions.length; i++){
        if(permissions[i] === action){
            hasPermission = true;
            break;
        }
    }
}

console.log(hasPermission);