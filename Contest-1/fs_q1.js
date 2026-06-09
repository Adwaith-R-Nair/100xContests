const fs = require('fs');

fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err){
        console.error("Error reading file : ", err);
        return;
    }

    const users = JSON.parse(data);
    // console.log(users);
    let emailOutput = "";

    for (let i = 0; i < users.length; i++){
        const email = users[i].email;

        if(i === users.length - 1){
            emailOutput += email;
        }
        else{
            emailOutput += email + "\n";
        }
    }
    // console.log(emailOutput);

    fs.writeFile('email.txt', emailOutput, (err) => {
        if (err){
            console.error("Error writing file : ", err);
            return;
        }
        console.log("email.txt successfully created");
    });
});