const models = require('./../models')
const sequelize = require('../models').sequelize
const Sequelize = require('sequelize');
const fs = require('fs')
const _ = require('lodash')
const config = require('config')
const axios = require('axios')

exports.searchMovies = async (req, res) => {
    const { title } = req.body

    try {

        let movies = await axios.get(`http://www.omdbapi.com/?apikey=5c6f50b9&s=${title}&page=2`)

        if(movies.data) {
            await models.test.create({ endpoint: 'search', agent: req.headers['user-agent'] })
        }

        return res.status(200).send(movies.data)

    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}

exports.detailMovie = async (req, res) => {
    const { imdbID } = req.body
    
    let movie = await axios.get(`http://www.omdbapi.com/?apikey=5c6f50b9&i=${imdbID}`)

    if(movie.data) {
        await models.test.create({ endpoint: 'detail', agent: req.headers['user-agent'] })
    }

    return res.status(200).send(movie.data)
}