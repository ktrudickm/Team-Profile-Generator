function generateTeam(data){

    const generateManager = manager => {
        
        return ` 
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.office}</li>
            </ul>
        </div>`
    };

    const generateEngineer = engineer => {
        
        return ` 
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>`
    }
    
    const generateIntern = intern => {
        
        return ` 
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">Intern</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>`
    }
    
    let tempArr =[]

    tempArr.push(data.filter(e => e.getRole() === "Manager").map(manager => generateManager(manager)));
    tempArr.push(data.filter(e => e.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));
    tempArr.push(data.filter(e => e.getRole() === "Intern").map(intern => generateIntern(intern)));

    return tempArr.join('')

    
}



function generateHTML(data, teamname) {

    return `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./Assets/css/style.css">
    </head>

    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 text-center">${teamname}</h1>
            </div>
        </div>
    <div class="d-flex flex-row">
    ${generateTeam(data)}
    </div>
        
        </div>



    </body>

</html>`
}



module.exports = generateHTML;