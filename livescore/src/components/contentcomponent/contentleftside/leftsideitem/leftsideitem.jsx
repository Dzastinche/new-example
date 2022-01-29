import { useState } from "react"
import './leftsideitem.scss'
export const LefSideItem=({sideitem,games})=>{
    const [hidden,show]=useState(true)
    console.log(sideitem,games)
    return(
        <div className='leftMenu__item' >
            <div className="sideitems-header">
            <img style={{width:50 +`px`}} src={sideitem.competition.area.ensignUrl} alt="" />
            <h3>{sideitem.competition.name}</h3>
            </div>
            <div className="sideitems">
            {games.map(ele=>{
                return(
                <p>{`${ele.homeTeam.name}vs${ele.awayTeam.name}`}</p>
            )})}
            </div>
            
            
        </div>
    )
}