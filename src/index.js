const express = require('express');
const { v4: uuidv4 } = require("uuid")

const app = express();

const customer = [];

app.use(express.json());


app.post("/account", (request, response) => {
    const { cpf, name } = request.body;
    const customerAlreadyExists = customer.some(
        (customer) => customer.cpf === cpf
    );

    if (customerAlreadyExists) {
        return response.status(400).json({ error: 'Customer already exists!' });
    }

    customer.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    })

    return response.status(201).send();
})

app.listen(3333);