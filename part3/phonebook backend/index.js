const express = require("express");
const { get } = require("express/lib/response");

const app = express();

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
    id = Number(request.params.id)
    persons = persons.filter(person => person.id != id)
    response.status(204).end()
})

const PORT = 3001;
app.listen(PORT, console.log("server running on port ", PORT));
