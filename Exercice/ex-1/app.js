import {employees} from '../../dataset.js';

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
             <td>${e.skills.join(',')}</td>
             <td>${e.joinDate}</td>
             <td>${e.email}</td>
             <td>${e.projects.join(',')}</td>
             <td>${e.isActive ? 'Yes' : 'No'}</td>
             <td>${e.languages.join(',')}</td>
        `;

        employeesTbody.append(tr);
    })
}


toggleContainer();
showList();