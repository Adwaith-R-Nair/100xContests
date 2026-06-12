const fs = require('fs');

fs.readFile('events.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file", err);
        return;
    }

    const events = data.trim().split('\n');

    const counts = {};

    events.forEach(event => {
        if (counts[event]) {
            counts[event] = counts[event] + 1;
        } else {
            counts[event] = 1;
        }
    });

    const summary = Object.entries(counts)
        .map(([event, count]) => `${event}: ${count}`)
        .join('\n');

    fs.writeFile('analytics.txt', summary, (err) => {
        if (err) {
            console.error("Error writing file", err);
            return;
        }
        console.log("analytics.txt successfully written");
    });
});
