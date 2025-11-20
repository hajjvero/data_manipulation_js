import {employees} from '../dataset.js';

// 1 - Get the first name of the first employee
function getFirstEmployeeFirstName() {
    console.log(employees[0].firstName);
}

// getFirstEmployeeFirstName();

// 2 - Get the last name of the last employee
function getLastEmployeeLastName() {
    console.log(employees[employees.length - 1].lastName)
}
// getLastEmployeeLastName();

// 3 - Get the department of employee with ID 5
function getEmployeeDepartmentById(id) {
    let start, end, mid;
    start = 0;
    end = employees.length - 1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        let empTemp = employees[mid];
        if (empTemp.id === id) {
            console.log(empTemp.department);
            return;
        } else if(id < empTemp.id) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
}

// getEmployeeDepartmentById(5);

// 4 - Count how many employees are in the array
function countEmployees() {
    let count = 0;
    for (let emp of employees) {
        count++;
    }

    return count;
}

// console.log(countEmployees())

// 5 - Check if any employee is inactive (isActive: false)
function hasInactiveEmployees() {
    for (let emp of employees) {
        if (!emp.isActive){
            return true;
        }
    }
    return false
}

// console.log(hasInactiveEmployees());