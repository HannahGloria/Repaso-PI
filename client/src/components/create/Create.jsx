import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../../redux/actions';

export default function Create(){
    const dispatch = useDispatch();
    const stateEpisodes = useSelector(state => state.episodes)

    useEffect(()=>{
        dispatch(getEpisodes());
    }, []);

    return ( 
        <div>
            <h1>Create</h1> 
        </div>
    )
}

//////!49