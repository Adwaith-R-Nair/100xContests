const fs = require('fs');

fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err){
        console.error("File not read", err);
        return;
    }

    const users = JSON.parse(data)
    
    const emails = users.map(user => user.email).join('\n');

    fs.writeFile('email.txt', emails, (err) => {
        if (err){
            console.error("File writing failed", err);
            return;
        }
        console.log("email.txt successfully created");
    });
});