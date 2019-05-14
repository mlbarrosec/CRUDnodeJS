module.exports = function(app) { 

    //Routes for Views html
    app.get("/", function(req,res){ 
        res.sendFile(__dirname + '/views/index.html');
    });

    app.get("/insert", function(req,res){ 
        res.sendFile(__dirname + '/views/insert.html');
    });

    //Routes dor Queryes
    
    //Route for 
    app.get("/users-list" ,function(req,res){
        //res.sendFile(__dirname + '/views/users-list.html'); 
        let connection = new app.src.dbRequests();
        connection.listUsers(res);
    });

    app.post("/insert",function(req,res){ 
        let dataUser = req.body;
        let connection = new app.src.dbRequests();
        connection.insertUser(dataUser,res);
    });

    app.get("/remove/:id",function(req,res){
        let id = req.params.id;
        let connection = new app.src.dbRequests();
        connection.deleteUser(id,res);
    });

    app.get("/user-details/:id", function(req,res){
        let id = req.params.id;
        let connection = new app.src.dbRequests();
        connection.userDetails(id, res);
    });

    app.post("/edit-user", function(req, res){        
        let dataUser = req.body;
        let connection = new app.src.dbRequests();
        connection.editUser(dataUser,res);
    });

    


}