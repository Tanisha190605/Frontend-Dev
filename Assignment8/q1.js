class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, score) => sum + score, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }

    showResult() {
        console.log(`Student: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
        console.log(`Grade: ${this.getGrade()}`);
    }
}
const s1 = new Student("Tanisha", [95, 89, 92, 90]);
const s2 = new Student("Aarav", [70, 65, 72, 68]);
const s3 = new Student("Riya", [45, 50, 40, 55]);

s1.showResult();
s2.showResult();
s3.showResult();
