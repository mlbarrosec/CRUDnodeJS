import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {User} from "./entity/User";

import {ScreamTemplateUsers} from "./TemplatesAdmin"; //Template da página html 

import {ScreamTemplateDelete} from "./TemplatesAdmin";
import {ScreamTemplateInsert} from './TemplatesAdmin';

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

    //Function response for add users in db
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
                res.send(ScreamTemplateInsert(body.name));                             
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

    //Function to list all users in data base
    //return in response a template for table html mount
    listUsers(res:any):void {
        connection
        .then(async connection => {
            let allUsers = connection.getRepository(User);
            let users = await allUsers.find();

            res.send(ScreamTemplateUsers(users));
        })
        .catch(error => {
            let saidaErro = {
                "errorCode":"500",
                "msg": 'Error in server'
            }         
            res.status(500).send(saidaErro);
            console.log(error);
        });
    }

    deleteUser(idUser:number,res:any):void{
        connection
        .then(async connection => {
            connection
                .createQueryBuilder()
                .delete()
                .from(User)
                .where("id = :id",{id: idUser})
                .execute();
            
            res.send(ScreamTemplateDelete(idUser));
        })
        .catch(error => {
            let saidaErro = {
                "errorCode":"500",
                "msg": 'Error in server'
            }         
            res.status(500).send(saidaErro);
            console.log(error);
        });
    }

}

module.exports = function(){
    return dbRequests;
}

