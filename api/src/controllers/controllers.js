const axios = require ('axios').default;
const { Episode, Character } = require('../db.js')


const getCharacters = async (req, res, next) =>{
    let characterInfo = [];
    try {
        const api = await axios('https://rickandmortyapi.com/api/character')
        //console.log(characters);
        const db = await Character.findAll({include:Episode})
        if(api || db){
            let apiResponse = api.data.results?.map(char =>{
                return{
                    name: char.name,
                    species: char.species,
                    origin: char.origin,
                    image: char.image,
                    created: char.created
                }
            });
            let response = [...apiResponse, ...db]
            res.send(response)
        }
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
        episodesInfo.forEach((epi) => { 
            Episode.findOrCreate({///Episode es lo que importamos desde el archivo db.js, y findorcreate es propio de sequelize
                where: {
                    id: epi.id,
                    name: epi.name,
                }
            })
        })
        res.send(episodesInfo)
    } catch (error) {
        next(error)
    }

} 

const postCharacters = async (req, res, next) =>{
    try {
        const aCharacter = req.body;
        let [newCharacter, ch] = await Character.findOrCreate({//findOrCreate devuelve un array con dos variables,
            // la primera el objeto del personaje, la segunda (ch) un booleano que indica si lo tuvo que crear o no.
            where:{
                name: aCharacter.name,
                species: aCharacter.species,
                origin: aCharacter.origin,
                image: aCharacter.image,
                created: true,//los que vienen por la API deberian de estar en false y los que creemos en true como en este caso del post
            }
        })
        //console.log("newCharacter: ", newCharacter);
        //console.log("ch: ", ch);
        await newCharacter.setEpisodes(aCharacter.episode)
        return res.send(newCharacter)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {getCharacters, getEpisodes, postCharacters}