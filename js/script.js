const students = [
    { name: "An",   grades: [14, 16, 12, 18] },
    { name: "Ben",  grades: [9,   7, 11,  8] },
    { name: "Cas",  grades: [15, 17, 14, 16] },
    { name: "Dina", grades: [6,   8,  5,  9] },
    { name: "Eli",  grades: [13, 11, 15, 12] },
];

function calculateAverage(grades){
    let total = 0;

    for (let index = 0; index < grades.length; index++) {
        total = total + grades[index];
    }
    let average = total / grades.length;
    return average.toFixed(2);
}

for (let index = 0; index < students.length; index++) {
    let average = calculateAverage(students[index].grades);

    console.log(`${students[index].name}: ${average}`);
}

function getPassingStudents(students) {
    let passingStudents = [];

    for (let index = 0; index < students.length; index++) {
        let average = calculateAverage(students[index].grades);

        if (average >= 10) {
            passingStudents.push(students[index]);
        }
    }

    return passingStudents;
}

let passingStudents = getPassingStudents(students);
console.log(`Geslaagde studenten:`);

for (let index = 0; index < passingStudents.length; index++) {
    console.log(`${passingStudents[index].name} is geslaagd`);
}
