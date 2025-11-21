import {employees} from '../../dataset.js';

const employeeForm = document.getElementById('employee-form');

const inputFirstName = document.getElementById('input-firstName');

const inputLastName = document.getElementById('input-lastName');

const inputAge = document.getElementById('input-age');

const inputDepartment = document.getElementById('input-department');

const skillsContainer = document.getElementById('skills-container');

const addSkillBtn = document.getElementById('add-skill-btn');

addSkillBtn.addEventListener('click', () => {
    const inp = document.createElement('input');
    inp.className='skils-inputs';
    inp.setAttribute('type', 'text');
    inp.setAttribute('required', 'true');

    skillsContainer.append(inp);
})

employeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputsSkilles = Array.from(document.getElementsByClassName('skils-inputs'));
    const emp = {
        id: employees.length + 1,
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        age: inputAge.value,
        department: inputDepartment.value,
        skills: inputsSkilles.map((inp) => inp.value),
    };

    employees.push(emp);

    clearForm();
    showList();
});


function clearForm() {
    inputFirstName.value = '';
    inputLastName.value = '';
    inputAge.value = '';
    skillsContainer.innerHTML = '';
}

function toggleContainer() {
    const container = document.getElementById("employees-container");
    const btn = document.getElementById("btn");

    btn.addEventListener('click', () => {
        container.classList.toggle('hidden');
    })
}

function showList() {
    const employeesTbody = document.getElementById("employees-tbody");

    employeesTbody.innerHTML = '';

    employees.map((e) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${e.firstName}</td>
             <td>${e.lastName}</td>
              <td>${e.department}</td>
             <td>${e.position}</td>
              <td>${e.salary}</td>
             <td>${e.skills?.join(',')}</td>
             <td>${e.joinDate}</td>
             <td>${e.email}</td>
             <td>${e.projects?.join(',')}</td>
             <td>${e.isActive ? 'Yes' : 'No'}</td>
             <td>${e.languages?.join(',')}</td>
        `;

        employeesTbody.append(tr);
    })
}


toggleContainer();
showList();