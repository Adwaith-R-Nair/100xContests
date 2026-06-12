const fs = require('fs');

fs.readFile('students.json', 'utf-8', (err, data) => {
    if (err){
        console.error("File not read", err);
        return;
    }
    let students = JSON.parse(data);
    let result = "";
    fs.readFile('marks2.json', 'utf-8', (err, data) => {
        if (err){
            console.error("File not found", err);
            return;
        }
        let marks = JSON.parse(data);

        for(let student of students){
            let marksData = marks.find(m => m.id === student.id);
            result += `${student.name} - ${marksData.marks}\n`
        }
        console.log(result)
        fs.writeFile('report2.txt', result, (err) => {
            if (err){
                console.error("Error writing file", err);
                return;
            }
            console.log("Report written successfully");
        })
    })
})