var app = require ('./config/custon-express')();

app.listen(3000, function(){
    console.log("servidor executando na porta 3000");
});