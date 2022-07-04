const express =require('express')
// const helper = require('./helper.js') 
// const favicon = require('serve-favicon')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// const {Sequelize,DataTypes} = require('sequelize')
// const {success,getUniqueId} = require('./helper.js') 
// let pokemons = require('./src/db/mock-pokemon')
// const PokemonModel = require('./src/models/pokemon') 
const sequelize = require('./src/db/sequelize')

const app = express()
const port = 3000

// Creation d'un middleware pour logger les requetes entrantes ..

// const logger = (req,res,next) => {
//     console.log(`URL : ${req.url}`)
//     next()
// }
// app.use(logger)

// app.use((req,res,next) => {
//     console.log(`URL : ${req.url}`)
//     next()
// })

// connection de sequelize a notre base de donnees

    

app.use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()

// Place dediee aux futurs point de terminaisons

 

app.listen(port, () => console.log(`Ca court sur : http://localhost:${port}`))  