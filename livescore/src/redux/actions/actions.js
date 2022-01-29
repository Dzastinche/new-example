import { year,mjesec,dan } from "./date"

console.log(year,mjesec,dan())
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
export const addnews=(news)=>{
    return{
        type:'add-news',
        payload:[news]
    }
}
export const Newsfor=()=>{
    return(dispatch)=>{
        const proxy='https://shrouded-temple-39982.herokuapp.com/';
        fetch(`${proxy}https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c8ca03f400434aa49ac99176e8f8eb03`)
        .then(el=>el.json())
        .then(ele=>{dispatch(addnews(ele.articles));dispatch(finishedNews())})
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
export const addgametofavorite=(game)=>{
    return{
        type:"add_favorite",
        payload:game,
    }
}
export const finishedNews=()=>{
    return{
        type:'finished-news'
    }
}
export const deleteFavGame=(id)=>{
    return{
        type:'delete-game',
        payload:id
    }
}