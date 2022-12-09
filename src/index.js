const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const users = [];


function checksExistsUserAccount(request, response, next) {
  // Complete aqui
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;


  const nameAlreadyExists = users.some(
    (user) => user.name === name
  )
  const userNameAlreadyExists = users.some(
    (user) => user.username === username
  )

  if(userNameAlreadyExists) {
    return response.status(400).json({error:"UserName Already Exists!"})
  }
  if(nameAlreadyExists) {
    return response.status(400).json({error:"Name Already Exists!"})
  }

  users.push({
    name,
    username,
    id: uuidv4(),
    todos: []
  })

  return response.status(201).send();
});


app.listen(3333);