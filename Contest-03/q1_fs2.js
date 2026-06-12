const fs = require('fs');

fs.readFile('marks.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file", err);
        return;
    }

    const students = JSON.parse(data);

    if (students.length === 0) {
        console.log("No student data found");
        return;
    }

    const marks = students.map(s => s.marks);
    console.log(marks);

    const highest = Math.max(...marks);
    const lowest  = Math.min(...marks);
    const average = marks.reduce((sum, m) => sum + m, 0) / marks.length;

    const report = `Highest: ${highest}\nLowest: ${lowest}\nAverage: ${average}`;

    fs.writeFile('report.txt', report, (err) => {
        if (err) {
            console.error("Writing to file failed", err);
            return;
        }
        console.log("report.txt successfully written");
    });
});
