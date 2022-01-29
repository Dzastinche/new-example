import React from 'react'
import { useSelector } from 'react-redux'
import './contentleftside.scss'
import {LefSideItem} from './leftsideitem/leftsideitem'

const Sidebar=()=>{
    let leagues=useSelector(state=>state.todaygames.utakmice[0].matches)
    let id=[]
    return(
        <div className='container__myMenu menu country-list my-leagues leftMenu myTeamsWrapper side'>
            {leagues.map((el)=>{
                if(id.includes(el.competition.id)){
                    return null
                }
                else{
                    id.push(el.competition.id)
                    let filtered=leagues.filter(ele=>ele.competition.id==el.competition.id)
                    console.log(filtered)
                    return(<LefSideItem sideitem={el} games={filtered}></LefSideItem>)
                }
                
            })}   
            </div>
    )
}
export default Sidebar