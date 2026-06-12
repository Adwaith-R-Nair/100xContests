const fs = require('fs');

fs.readFile('marks.json', 'utf-8', (err,data) =>{
    if(err){
        console.error("Error reading the file : ", err);
        return;
    }

    const students = JSON.parse(data);

    if (students.length === 0){
        console.log("No student data found");
        return;
    } 

    let highest = students[0].marks;
    let lowest = students[0].marks;
    let totalMarks = 0;

    for (let i = 0; i < students.length; i++){
        const currentMarks = students[i].marks;
        totalMarks += currentMarks;

        if(currentMarks > highest){
            highest = currentMarks;
        }

        if(currentMarks < lowest){
            lowest = currentMarks;
        }
    }

    const average = totalMarks / students.length;

    const reportContent = `Highest : ${highest}\nLowest : ${lowest}\nAverage : ${average}`;

    fs.writeFile('report.txt', reportContent, (err) => {
        if (err){
            console.error("Error writing report file", err);
            return;
        }
        console.log("report.txt successfully created")
    });
});