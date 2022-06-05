import React from "react";
import { useDispatch } from 'react-redux';
import { filter } from "../../redux/actions";

export default function Filter(){

    const dispatch = useDispatch()
    function handleSelect(event){
        dispatch(filter(event.target.value)); //dispatch(filter (Default/Human/Alien)
    }

    return(
        <div>
            <select onChange={handleSelect} name="" id="">
                <option value="Default">Todos</option>
                <option value="Alien">Alien</option>
                <option value="Human">Human</option>
            </select>
        </div>
    )
}