const express = require("express");
const { get, json } = require("express/lib/response");

const app = express();
app.use(express.json())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});
app.get("/api/persons/info", (request, response) => {
  const date = new Date();
  const numberPersons = persons.length;
  response.send(
    `<p>Phonebook has info for ${numberPersons} people</p>
        <p>${date}</p>`
  );
});
app.get("/api/persons/:id", (request, response)=> {
    const id = Number(request.params.id)
    person = persons.find(person=> person.id === id)
    person ? response.json(person) : response.status(404).end()
    

})
app.delete("/api/persons/:id", (request, response)=>{
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id != id)
    response.status(204).end()
})

app.post("/api/persons", (request, response)=>{
  body = request.body
  if(!body.name || !body.number)
    {response.status(400).json({error: "missing name or number"})}
  
  else if (persons.find(person=> person.name === body.name))
    {response.status(400).json({error:"repeated name"})}

  person ={
    id: body.id || Math.floor(Math.random() * 1000,),
    name: body.name,
    number: body.number
  }
  persons = [...persons, person]
  response.json(person)
})

const PORT = 3001;
app.listen(PORT, console.log("server running on port ", PORT));
