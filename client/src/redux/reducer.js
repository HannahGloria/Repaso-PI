import { getAll, get_Episodes } from "./actions";
import { filtrar } from "./actions";

const initialState = {
    personajes:[], // aqui todos los personajes guardados
    filtrados:[], //estado que vamos a renderizar
    detalle: {}, //estado para renderizar el detalle
    episodios: [], //estado con los episodios para poder renderizarlos 
};

export default function rootReducer(state = initialState, action) { //el reducer recibe un estado y una accion, en ese orden
    switch(action.type){
        case getAll: 
            return { //retornamos un objeto porque es una copia del estado 
                ...state,
                personajes: action.payload, //array obj personajes que viene del back 
                filtrados: action.payload, //array obj filtrados que viene del back 
            }; 
        case get_Episodes:
            return{
                ...state,
                episodios: action.payload,
            }
        case filtrar:
            if(action.payload === "Default"){
                return{
                    ...state,
                    filtrados: state.personajes, ///cargar todos los personajes
                };
            }else if(action.payload){
                return{
                    ...state,
                    filtrados: state.personajes.filter(pj => pj.species === action.payload) //"filtrar pj Human or Alien"
                }
            }
            else{
                return{
                    ...state,
                }
            }
        default : 
            return state;
    }
}

//reducer---> modifica el estado a traves de una copia
//redux: cuando haya un cambio en el estado va a comparar el anterior con el nuevo 