const express = require('express');
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json());

app.post("/account", (req, res) => {
    const { cpf, name } = request.body;
    const id = uuidv4();
})
//Localhost:3333
app.listen(3333);