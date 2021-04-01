function generateTeam(data){

    const generateManager = manager => {
        
        return ` 
        MANGER
        NAME: ${manager.name}`
    };

    const generateEngineer = engineer => {
        
        return ` 
        ENGINEER
        NAME: ${engineer.name}`
    }
    
    const generateIntern = intern => {
        
        return ` 
        INTERN
        NAME: ${intern.name}`
    }
    
    let tempArr =[]

    tempArr.push(data.filter(e => e.getRole() === "Manager").map(manager => generateManager(manager)));
    tempArr.push(data.filter(e => e.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));
    tempArr.push(data.filter(e => e.getRole() === "Intern").map(intern => generateIntern(intern)));

    return tempArr.join('')

  


    
}






function generateHTML(data, teamname ) {

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
    <div>
    ${generateTeam(data)}
    </div>
        
        </div>



    </body>

</html>`
}



module.exports = generateHTML;