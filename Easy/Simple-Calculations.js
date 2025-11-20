import {employees} from "../dataset.js";

// 6 - Calculate the average age of all employees
function calculateAverageAge() {
    let age = 0
    for (let emp of employees) {
        age += emp.age;
    }
    console.log(age / employees.length);
}

// calculateAverageAge();

// 7 - Find the employee with the highest salary
function getHighestPaidEmployee() {
    // sort list (selection sort)
    for (let i = 0; i < employees.length; i++) {

    }
}