//1. actions 2.reducer 3.store -------- orden para crear el PI 
//dispatch ---> actions ---> reducer ---> editar los estados
//componente <--- estados 
import axios from 'axios';

export const getAll = 'Get all';
export const routeGet = 'http://localhost:3001/character/getCharacter';

export function getThis(){
    return async function request(dispatch){
        let requestBack = await axios.get(routeGet)
        return dispatch({
            type: getAll,
            payload: requestBack.data, //array de objetos que viene del back
        })
    }
}

/* Las acciones son un objeto que tiene dos propiedades tipo y pedido, con el tipo el reducer identifica que es lo que tiene que hacer y con el pedido(payload) va a tener acceso a la info necesaria para hacer esos cambios que necesito */