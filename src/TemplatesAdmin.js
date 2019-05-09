"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ScreamTemplateUsers(arrayUsers) {
    let templateUsers = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
                <title>CRUD NODE JS</title>
            </head>           
            
            <body>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">                        
                            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                                <a class="navbar-brand" href="/">CRUD</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                    <a class="nav-item nav-link active" href="/">HOME <span class="sr-only">(current)</span></a>
                                    <a class="nav-item nav-link" href="/insert">INSERT</a>
                                    <a class="nav-item nav-link" href="/users-list">USERS</a>                      
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-striped">
                                <thead class="thead-dark">
                                    <tr>
                                        <th class="text-center">Id</th>
                                        <th class="text-center">Nome</th>
                                        <th class="text-center">Username</th>
                                        <th class="text-center">Email</th>
                                        <th class="text-center">Address</th>
                                        <th class="text-center">Phone</th>
                                        <th class="text-center">Editar</th>
                                        <th class="text-center">Excluir</th>
                                    </tr>
                                </thead>
                                <tbody>                            
                                    ${arrayUsers.map(user => `
                                        <tr>
                                            <td class="text-center">${user.id}</td>
                                            <td class="text-center">${user.name}</td>
                                            <td class="text-center">${user.username}</td>
                                            <td class="text-center">${user.email}</td>
                                            <td class="text-center">${user.address}</td>
                                            <td class="text-center">${user.phone}</td>                                            
                                            <td class="text-center"><i class="fas fa-pen-alt"></i></td>
                                            <td class="text-center"><a href="/remove/${user.id}"><i class="fas fa-trash-alt"></i></a></td>
                                        </tr>`).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <nav class="navbar fixed-bottom navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">Marcelo Lopes de Barros</a>
                        <a class="navbar-brand" href="#">E-mail: mlbarrosec@gmail.com</a>
                    </nav>
                </div>        
            </body>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </html>    
        `;
    return (templateUsers);
}
exports.ScreamTemplateUsers = ScreamTemplateUsers;
function ScreamTemplateDelete(idUser) {
    let templateDelete = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>CRUD NODE JS</title>
    </head>
    <body>
        <div class="container">
            <div class="row">            
                <div class="col-md-12">
                            
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="/">CRUD</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="/">HOME <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="/insert">INSERT</a>
                            <a class="nav-item nav-link" href="/users-list">USERS</a>                       
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <h1>Success!</h1>
                    <p>User ${idUser},  deleted successfully!"</p>                
                </div>
            </div>

            <nav class="navbar fixed-bottom navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Marcelo Lopes de Barros</a>
                <a class="navbar-brand" href="#">E-mail: mlbarrosec@gmail.com</a>
            </nav>
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </html>`;
    return templateDelete;
}
exports.ScreamTemplateDelete = ScreamTemplateDelete;
function ScreamTemplateInsert(idName) {
    let templateInsert = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>CRUD NODE JS</title>
    </head>
    <body>
        <div class="container">
            <div class="row">            
                <div class="col-md-12">
                            
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="/">CRUD</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="/">HOME <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="/insert">INSERT</a>
                            <a class="nav-item nav-link" href="/users-list">USERS</a>                       
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <h1>Success!</h1>
                    <p>User ${idName}, added successfully!"</p>                
                </div>                
            </div>

            <nav class="navbar fixed-bottom navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Marcelo Lopes de Barros</a>
                <a class="navbar-brand" href="#">E-mail: mlbarrosec@gmail.com</a>
            </nav>

        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </html>`;
    return templateInsert;
}
exports.ScreamTemplateInsert = ScreamTemplateInsert;
