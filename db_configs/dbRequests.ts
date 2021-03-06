import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {User} from "./entity/User";

import {ScreamTemplateUsers} from "./TemplatesAdmin"; //Template da página html 
import {ScreamTemplateUserDetail} from './TemplatesAdmin';
import {ScreamTemplateMsg} from './TemplatesAdmin';

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
                let title = "Success!";
                let msg = "User inserted successfully.";
                res.send(ScreamTemplateMsg(title,msg));                           
        })
        .catch(error => {
            let errorMsg = {
                "errorCode":"500",
                "msg": 'Error in server'
            }         
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }

    //Function for edit user
    editUser(body:any, res:any):void {
        connection
            .then(async connection =>{
                connection
                    .createQueryBuilder()
                    .update(User)
                    .set(
                        {
                            name: body.name, 
                            username: body.username, 
                            email: body.email, 
                            address: body.address, 
                            phone: body.phone 
                        }
                    )
                    .where("id = :id", {id: body.id})
                    .execute();
                    
                    let title = "Success!";
                    let msg = "User edited successfully.";
                    res.send(ScreamTemplateMsg(title,msg));
            })
            .catch(error => {
                let errorMsg = {
                    "errorCode":"500",
                    "msg": 'Error in server'
                }         
                res.status(500).send(errorMsg);
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
            let errorMsg = {
                "errorCode":"500",
                "msg": 'Error in server'
            }         
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }

    //Function for list user details
    userDetails(idUser:number,res:any){
        connection
        .then(async connection => { 
            let user = await connection
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.id = :id", { id: idUser })
            .getOne();
           
            res.send(ScreamTemplateUserDetail(user));
        })
        .catch(error =>{

            let errorMsg = {
                "errorCode":"500",
                "msg": 'Error in server'
            }         
            res.status(500).send(errorMsg);
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
            
                let title = "Success!";
                let msg = "User deleted successfully.";
                res.send(ScreamTemplateMsg(title,msg));
        })
        .catch(error => {
            let errorMsg = {
                "errorCode":"500",
                "msg": 'Error in server'
            }         
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }

}

module.exports = function(){
    return dbRequests;
}

