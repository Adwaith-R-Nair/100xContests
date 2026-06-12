const fs = require('fs');

fs.readFile('marks.json', 'utf-8', (err, data) => {
    if(err){
        console.error("Error reading file", err)
    }

    const students = JSON.parse(data);

    if (students.length === 0){
        console.log("No student data found");
        return;
    }

    let highest = students[0].marks;
    let lowest = students[0].marks;
    let totalMarks = 0;

    for(let i = 0; i < students.length; i++){
        const currentMarks = students[i].marks;
        totalMarks += currentMarks;

        if (currentMarks > highest){
            highest = currentMarks;
        }
        if (currentMarks < lowest){
            lowest = currentMarks;
        }
    }
   
    const average = totalMarks / students.length;
    const report = `Highest: ${highest}\nLowest: ${lowest}\nAverage: ${average}`;

    fs.writeFile('report.txt', report, (err) => {
        if (err){
            console.error("Writing to file failed", err);
            return;
        }
        console.log("report.txt successfully written");
    })

})