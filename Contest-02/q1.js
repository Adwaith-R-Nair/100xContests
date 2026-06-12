const students= [
    { name:"Aman", marks:78 },
    { name:"Riya", marks:91 },
    { name:"Kabir", marks:65 }
];

let ansArray = students.map((student) => {
    let grade;
    if ( student.marks > 90){
        grade = 'A'
    } else if (student.marks >= 70){
        grade = 'B'
    } else {
        grade = 'C'
    }
    return {
        name: student.name.toUpperCase(),
        grade: grade
    }
})
console.log(ansArray);