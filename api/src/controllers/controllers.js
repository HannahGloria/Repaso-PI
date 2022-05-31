const axios = require ('axios').default;
const { Episode, Character } = require('../db.js')


const getCharacters = async (req, res, next) =>{
    let characterInfo = [];
    try {
        const characters = await axios('https://rickandmortyapi.com/api/character')
        //console.log(characters);
        characterInfo = characters.data.results?.map(char =>{
            return{
                id: char.id,
                name: char.name,
                species: char.species,
                origin: char.origin,
                image: char.image,
                created: char.created
            }
        });
        //console.log(characterInfo)
        res.send(characterInfo)
    } catch (error) {
        next(error)
    }

} 
const getEpisodes = async (req, res, next) =>{
    let episodesInfo = [];
    try {
        const episodes = await axios('https://rickandmortyapi.com/api/episode')
        //console.log(episodes)
        episodesInfo = episodes.data.results?.map(epi =>{
            return{
                id: epi.id,
                name: epi.name
            }
        });
        res.send(episodesInfo)
    } catch (error) {
        next(error)
    }

} 

const postCharacters = async (req, res, next) =>{
    let {
        id,
        name,
        species,
        origin,
        image,
        created
    } = req.body
    const createCharacter = await Character.create({ 
        id,
        name : name.toLowerCase(),
        species,
        origin,
        image,
        created
    })
    //console.log(createCharacter);
    res.status(200).send({msj:'Creado con exito'})
}

module.exports = {getCharacters, getEpisodes, postCharacters}