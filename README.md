# Aplicação
  Essa aplicação node tem o objetivo de apresentar um CRUD de dados do usuário com com layout.

# Ferramentas
Para essa aplicação utilizouse Nodejs, MYSQL, HTML, CSS, Bootstrap

# Dependências

- "@types/node": "^12.0.0",
- "body-parser": "^1.19.0",
- "consign": "^0.1.6",
- "express": "^4.16.4",
- "express-validator": "^5.3.1",
- "mysql": "^2.17.1",
- "nodemon": "^1.19.0",
- "reflect-metadata": "^0.1.13",
- "typeorm": "^0.2.17",
- "typescript": "^3.4.5"

# Banco de dados
o sgdb utilizado foi o mysql, você deve criar um banco de dos e execuar o script sql contido no arquivo "crudb.sql", esse aquivo criará a tabela user que será responsavel por guardas as informações do usuário.

## configuração do banco de dados no TypeOrm
O arquivo "dbRequests.ts" é resposavel por executar as requisições ao banco de dados utilizando a api Typeorm para node. a constante connection deve ser configurada de acordo com as configurações do banco de dados utilizado.<br>

>const connection = createConnection ({<br>
    type: "mysql",<br>
    host: "localhost",<br>
    port: 3306,<br>
    username: "root",<br>
    password: "",<br>
    database: "crudb",<br>
    entities:[<br>
        User<br>
    ],<br>
    synchronize: true<br>
});<br>

