import { year,mjesec,dan } from "./date"
import { useDispatch } from "react-redux"

export const fillArray=(games)=>{
    return {
        type:'games',
        payload:[games]
    }
}

export const fetchGames=()=>{
    return(dispatch)=>{
    //fetch data

            const proxy='https://shrouded-temple-39982.herokuapp.com/';
            fetch(`${proxy}http://api.football-data.org/v3/matches?dateFrom=${year}-${mjesec}-${dan()}&dateTo=${year}-${mjesec}-${dan(1)}`,
            {
              "method": "GET",
                "headers": {
                "X-Auth-Token": "2a9c900328554726a0d0122a381955a5",
              }})
            .then(el=>  el.json())
            .then(ele=>{dispatch(fillArray(ele));dispatch(finished())})
          
    }
}
export const start=()=>{
    return{
        type:'start'
    }
}
export const finished=()=>{
    return{
        type:'finished'
    }
}
export const practice=()=>{
    
    return{
        type:'add_this_gamee'
        
    }
}