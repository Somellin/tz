/**
 * ФИС ТЗ
 *
 *  1. Модель данных из приложения для учета книг в библиотеке
 */

let Author = {
    "id" : '',
    "name" : ''
}

let PublishingHouse = {
    "id" : '',
    "name" : ''
}

class Student {
    constructor(id,name) {
        id;
        name;
        taken;
        this.id = id;
        this.name = name;
        this.taken = 0;
    }

    takeBook(){
        this.taken += 1;
    }
}

let Book = {
    "id" : '',
    "Author" : Author.id,
    "PublishingHouse" : PublishingHouse.id,
    "Genre" : '',
    "YearPublishing" : '',
    "Student" : Student.id
}

let numberOfCopies = {
    __proto__ : Book.id,
    "Total" : '',
    "Available" : ''
}

/**
 * Злостный читатель этот тот кто берет больше всего книг
 * Функция будет находить и возвращать обьект читателя и
 * наибольшим колличеством взятых книг
 */

const mystudent = new Student();
function findOfReader(Student){
    Student.allInstances = [];
    Student.allInstances.push(this);

    let res = '';
    let resint = 0;
    for (let i = 0; i < Student.allInstances.length; i++) {
        if (Student.allInstances.taken > resint){
            resint = Student.allInstances.taken;
            res = Student.allInstances.name;
        }
    }

    return res;
}