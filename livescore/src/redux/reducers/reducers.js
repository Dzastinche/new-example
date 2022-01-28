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
    
export const favGames=(state=[],action)=>{
    switch(action.type){
        case 'add_favorite':
            {
                let favgames=[...state];
                if( favgames.includes(action.payload))
                {return favgames}
                else{return [...favgames,action.payload]}
            }
        case 'delete-game':{
            let deleted=state.filter(el=> el!== action.payload)
            return deleted
        }
            break
        default: return state}}
        
    export const news=(state=[],action)=>{
        switch(action.type){
            case 'add-news':
                {return [...state,action.payload]}
                break  
                default: return state
        }
    }
export const Combined=combineReducers({todaygames:games,favGames:favGames,novosti:news})