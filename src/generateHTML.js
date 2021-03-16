const generateHTML = (answers) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css"/>
    
        <title>Team Profiles</title>
    </head>
    
    <body>
        <div class="jumbotron navbar-fixed-top text-center">
            <header>Team Profiles</header>
        </div>
    
        
        <div class='container'>
            <div class='row m-3'>
                ${answers.manCards}
            </div>
            <div class='row m-3'>
                ${answers.engCards}
            </div>
            <div class='row m-3'>
                ${answers.intCards}
            </div>
        </div>
    </body>
    </html>`
}

module.exports = generateHTML;