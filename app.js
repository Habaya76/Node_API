
const express = require('express')
const { success } = require('./helper.js')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log(`URL : ${req.url}`)
  next()
})


app.get('/',(req,res) => res.send('hello, Express !!'))

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'un pokemon a bien été trouvé'
    res.json(success(message, pokemon))
})
// retourne la liste des pokémons au format JSON, avec un message :
app.get('/api/pokemons', (req, res) => {
    const message = 'La liste des pokémons a bien été récupérée.'
    res.json(success(message, pokemons)) 
  })
   



app.listen(port,() => console.log(`Notre aplication node est demarrée sur : http://localhost:${port}`))