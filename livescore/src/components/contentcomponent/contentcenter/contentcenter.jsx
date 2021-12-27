import React, { useEffect } from 'react'
import './contentcenter.scss'
import {League} from './contentcentaritem/contentcentarleague'

const ContentCenter=({utakmice})=>{
    console.log(utakmice)
    let champ=[]
    console.log(champ)
    return (
        <div className='container__liveTableWrapper sport_page'>
        {utakmice.map((utakmica)=>{
            console.log(champ)
            if (champ.includes(utakmica.competition.id)){
                    return null
             }
             else {
                    champ.push(utakmica.competition.id)
                    return(
                        <League key={utakmica.competition.id} id={utakmica.competition.id} competition={utakmice}></League>
                        
                    )
                    
            }
        })}
        </div>
    )
}
export default ContentCenter
/* {
    utakmice.map((el)=>
    <h1 key={Math.random()}>{el}</h1>
    )
} */

           
        