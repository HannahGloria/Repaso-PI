import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../../redux/actions';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export default function Create(){
    //const history = useHistory();
    const dispatch = useDispatch();
    const stateEpisodios = useSelector((state) => state.episodios) // un array de episodes
    //crear un estado local para guardar la info del pj que queremos crear:
    const [personaje, setPersonaje] = useState({
        name: "",
        species: "",
        origin: "",
        image:"",
        episode: [],
    });

    function handleSelect(event){
        setPersonaje((personaje) => ({ //toma el estado anterior y lo actualiza, asi en funcion flecha
            ...personaje,
            episode: [...personaje.episode, event.target.value],//personaje.episode.push(e.target.value)
        }));
        //console.log(personaje); //lo mostraria con atraso pero porque no es async
    }

    async function handleSubmit(e){
        e.preventDefault();
        await axios.post('http://localhost:3001/character/create/', personaje);
        alert('Character created succesfully');
        //history.push('/home');//redirige el usuario al home
    }

    function handleChange(event){
        setPersonaje({
            ...personaje,
            [event.target.name]: event.target.value,//cambia la propiedad a la que sea igual al nombre del input
        })
    }

    useEffect(()=>{
        dispatch(getEpisodes());
        //console.log(stateEpisodes);
    }, []);

    return ( 
        <div>
            <h1>Create</h1>
            <form action="" onSubmit={handleSubmit}>
                <label>Name</label>
                <input name="name" type="text" value={personaje.name} onChange={handleChange}/>
                <br/>
                <label>Species</label>
                <input name="species" type="text" value={personaje.species} onChange={handleChange}/>
                <br/>
                <label>Origin</label>
                <input name="origin" type="text" value={personaje.origin} onChange={handleChange}/>
                <br/>
                <label>Image</label>
                <input name="image" type="text" value={personaje.image} onChange={handleChange}/>
                <br/>

                <select onChange={handleSelect}>
                    {stateEpisodios.length > 0 && 
                        stateEpisodios.map((ep) =>{
                            return <option key={ep.id} value={ep.id}>{ep.name}</option>;
                    })}
                </select>
                <button type='submit'>Create</button>
            </form> 
        </div>
    )
}

//////!1.24