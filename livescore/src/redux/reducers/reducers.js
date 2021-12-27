import { combineReducers } from "redux";

let neki={utakmice:[]}
export const games=(state=neki,action)=>{
    
switch(action.type){
    case 'start':
        return state
        break
    case 'games':
        return {...state,utakmice:[...action.payload]}
        break
    case 'finished':
        return {...state,loading:false}
        break
    default: return state;
}}
    
export const favGames=(state=neki,action)=>{
    switch(action.type){
        case 'add_this_gamee':
            return [...state,40]
        default: return state
    }
    
    }
export const Combined=combineReducers({todaygames:games,favGames:favGames})