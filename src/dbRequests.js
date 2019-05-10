"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const TemplatesAdmin_1 = require("./TemplatesAdmin"); //Template da página html 
const TemplatesAdmin_2 = require("./TemplatesAdmin");
const TemplatesAdmin_3 = require("./TemplatesAdmin");
const TemplatesAdmin_4 = require("./TemplatesAdmin");
const connection = typeorm_1.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "crudb",
    entities: [
        User_1.User
    ],
    synchronize: true
});
class dbRequests {
    //Function response for add users in db
    insertUser(body, res) {
        connection
            .then(connection => {
            connection
                .createQueryBuilder()
                .insert()
                .into(User_1.User)
                .values([
                {
                    name: body.name,
                    username: body.username,
                    email: body.email,
                    address: body.address,
                    phone: body.phone
                }
            ])
                .execute();
            res.send(TemplatesAdmin_3.ScreamTemplateInsert(body.name));
        })
            .catch(error => {
            let errorMsg = {
                "errorCode": "500",
                "msg": 'Error in server'
            };
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }
    //Function for edit user
    editUser(body, res) {
        connection
            .then((connection) => __awaiter(this, void 0, void 0, function* () {
            connection
                .createQueryBuilder()
                .update(User_1.User)
                .set({
                name: body.name,
                username: body.username,
                email: body.email,
                address: body.address,
                phone: body.phone
            })
                .where("id = :id", { id: body.id })
                .execute();
            res.send(TemplatesAdmin_3.ScreamTemplateInsert(body.id));
        }))
            .catch(error => {
            let errorMsg = {
                "errorCode": "500",
                "msg": 'Error in server'
            };
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }
    //Function to list all users in data base
    //return in response a template for table html mount
    listUsers(res) {
        connection
            .then((connection) => __awaiter(this, void 0, void 0, function* () {
            let allUsers = connection.getRepository(User_1.User);
            let users = yield allUsers.find();
            res.send(TemplatesAdmin_1.ScreamTemplateUsers(users));
        }))
            .catch(error => {
            let errorMsg = {
                "errorCode": "500",
                "msg": 'Error in server'
            };
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }
    //Function for list user details
    userDetails(idUser, res) {
        connection
            .then((connection) => __awaiter(this, void 0, void 0, function* () {
            let user = yield connection
                .getRepository(User_1.User)
                .createQueryBuilder("user")
                .where("user.id = :id", { id: idUser })
                .getOne();
            res.send(TemplatesAdmin_4.ScreamTemplateUserDetail(user));
        }))
            .catch(error => {
            let errorMsg = {
                "errorCode": "500",
                "msg": 'Error in server'
            };
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }
    deleteUser(idUser, res) {
        connection
            .then((connection) => __awaiter(this, void 0, void 0, function* () {
            connection
                .createQueryBuilder()
                .delete()
                .from(User_1.User)
                .where("id = :id", { id: idUser })
                .execute();
            res.send(TemplatesAdmin_2.ScreamTemplateDelete(idUser));
        }))
            .catch(error => {
            let errorMsg = {
                "errorCode": "500",
                "msg": 'Error in server'
            };
            res.status(500).send(errorMsg);
            console.log(error);
        });
    }
}
exports.dbRequests = dbRequests;
module.exports = function () {
    return dbRequests;
};
