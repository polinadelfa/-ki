// Класс Book
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    checkYear() {
        return typeof this.year === 'number' && this.year > 0;
    }

    getDescription() {
        return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`;
    }
}

// Базовый класс Student
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return total / this.grades.length;
    }

    showInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}, Средняя оценка: ${this.getAverageGrade()}`;
    }
}

// Подкласс GoodStudent
class GoodStudent extends Student {
    addGrade(grade) {
        const boostedGrade = Math.min(grade + 1, 5); // Увеличиваем на 1, максимум 5
        super.addGrade(boostedGrade);
    }
}
