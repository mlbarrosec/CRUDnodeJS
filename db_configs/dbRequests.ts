import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

const connection = createConnection ({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "crudb",
    entities:[
        User
    ],
    synchronize: true
});

export class dbRequests {

    insertUser(body:any,res:any):void {
        connection
            .then(connection => {
                connection
                .createQueryBuilder()
                .insert()
                .into(User)
                .values ([
                    {
                        name: body.name, 
                        username: body.username, 
                        email: body.email, 
                        address: body.address, 
                        phone:body.phone
                    }
                ])
                .execute();
                res.status(200).send('User Insert Success!');
            })
            .catch(error => {
                let saidaErro = {
                    "errorCode":"400",
                    "msg": 'Error connect to database'
                }         
                res.status(400).send(saidaErro);
                console.log(error);
            });
    }

}

module.exports = function(){
    return dbRequests;
}

