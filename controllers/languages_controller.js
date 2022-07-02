const express = require('express')
const languages = express.Router()
const Language = require('..models/language.js')

// Index
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})

//show
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name.toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })
})

models.export = languages