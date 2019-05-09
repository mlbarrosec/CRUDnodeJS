module.exports = function(app) { 

    //Routes for Views
    app.get("/", function(req,res){ 
        res.sendFile(__dirname + '/views/index.html');
    });

    app.get("/insert", function(req,res){ 
        res.sendFile(__dirname + '/views/insert.html');
    });

    app.get("/success",function(req,res){
        res.sendFile(__dirname + '/views/success.html');
    })

    app.get("/users-list" ,function(req,res){
        //res.sendFile(__dirname + '/views/users-list.html'); 
        let connection = new app.src.dbRequests();
        connection.listUsers(res);    
    });

    //Routes dor Queryes
   /* app.get('/users-list/:id', function(req,res){

        let id = req.params.id;
        let connection = new app.src.dbRequests();
        connection.listUsers(id, res);
    });*/

    app.post("/insert",function(req,res){        

        let dataUser = req.body;
        let connection = new app.src.dbRequests();

        connection.insertUser(dataUser,res)
    });

    


}