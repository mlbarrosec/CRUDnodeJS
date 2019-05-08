module.exports = function(app) { 

    app.get("/", function(req,res){ 
        res.sendfile(__dirname + '/views/index.html');
    });

    app.post("/insert",function(req,res){
        let dataUser = req.body;
        let connection = new app.src.dbRequests();

        connection.insertUser(dataUser,res)
    });


}