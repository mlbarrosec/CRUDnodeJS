"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
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
            res.redirect('/success');
            // res.status(200).send('User Insert Success!');               
        })
            .catch(error => {
            let saidaErro = {
                "errorCode": "400",
                "msg": 'Error connect to database'
            };
            res.status(400).send(saidaErro);
            console.log(error);
        });
    }
}
exports.dbRequests = dbRequests;
module.exports = function () {
    return dbRequests;
};
