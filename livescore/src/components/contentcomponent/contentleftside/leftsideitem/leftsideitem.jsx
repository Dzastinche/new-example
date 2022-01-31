import { useState } from "react"
import './leftsideitem.scss'
import Check from "./fft"
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
                    <div className="teams-ressult">
                         <div className="teams">
                            <div>{ele.homeTeam.name}</div>
                            <div>{ele.awayTeam.name}</div></div>
                        <div className="ressult">
                            {Check(ele)}
                        
                        </div>
                    </div>
                   
                
            )})}
            </div>
            
            
        </div>
    )
}