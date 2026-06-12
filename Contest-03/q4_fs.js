const fs = require('fs');

fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err){
        console.error("Error reading", err);
        return;
    }
    let upperData = data.trim().toUpperCase();
    fs.writeFile('uppercase.txt', upperData, (err) => {
        if(err){
            console.error("File write unsuccessful", err);
            return;
        }
        console.log("Uppercase written successfully");

        fs.readFile('uppercase.txt', 'utf-8', (err,data) => {
            if (err){
                console.error("Read unsuccessful", err);
                return;
            }
            let count = data.trim().split(" ");
            // console.log(count);
            let ans = `Total words : ${count.length}`;

            fs.writeFile('summary.txt', ans, (err) => {
                if (err){
                    console.error("Read unsuccessful", err);
                    return;
                }
                console.log("Summary written successfully");
            })
        })
    })
})