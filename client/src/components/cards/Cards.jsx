import React, {useEffect} from "react"; //
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux"; //useDispatch para despachar acciones
// useSelector para seleccionar un estado y tener la info de ese estado en nuestro componente  
import { getThis } from "../../redux/actions";
import Filter from "../filtro/filtro";

export default function Multiplecards(){
    const dispatch = useDispatch();
    //const stateOnlyCharacters =  useSelector(state => state.personajes) // personajes: [{}, {}]
    const personajesRenderizar = useSelector((state) => state.filtrados);

    useEffect(()=>{
        dispatch(getThis());
    }, []);
    
    return (
        <div>
            <h1>Personajes de Rick and Morty</h1>
            {/* Mapear el estado donde tengo los personajes y renderizar una card individual por cada uno */}

            <Filter/>

            {personajesRenderizar.length > 0 ? (
                personajesRenderizar.map((pj, posicion) => (
                <>
                    <Card 
                        key={posicion} 
                        name={pj.name} 
                        image={pj.image} 
                        species={pj.species}
                    />
                </>
                ))
                ) : ( 
                <h1>Loading...</h1>
            )}
        </div>
    );
}