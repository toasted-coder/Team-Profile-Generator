const employeeCards = (answers) => {
    if (answers.role === 'Manager') {
        return `
        <div class="card manager-card" style="width: 16rem;">
            <div class="card-body">
                <h4 class="card-title">${answers.name}</h4>
                <h6 class="card-text">${answers.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${answers.id}</li>
                <li class="list-group-item">Email: ${answers.email}</li>
                <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
            </ul>
        </div>
        `
    } else if (answers.role === 'Engineer') {
        return `
        <div class="card engineer-card" style="width: 16rem;">
            <div class="card-body">
                <h4 class="card-title">${answers.name}</h4>
                <h6 class="card-text">${answers.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${answers.id}</li>
                <li class="list-group-item">Email: ${answers.email}</li>
                <li class="list-group-item">GitHub Username: ${answers.github}</li>
            </ul>
        </div>
        `
    } else if (answers.role === 'Intern') {
        return `
        <div class="card intern-card" style="width: 16rem;">
            <div class="card-body">
                <h4 class="card-title">${answers.name}</h4>
                <h6 class="card-text">${answers.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${answers.id}</li>
                <li class="list-group-item">Email: ${answers.email}</li>
                <li class="list-group-item">School: ${answers.school}</li>
            </ul>
        </div>
        `
    }
}

module.exports = employeeCards;