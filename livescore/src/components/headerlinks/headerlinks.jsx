import React from 'react'
import './headerlinks.scss'
import {HeaderLinksButton} from './headerlinksbutton/headerlinksbutton'


const HeaderLinks=()=>{
    return(
        <div className='menuTop'>
         <div className='menuTop__group menuTop__content'>
             <HeaderLinksButton>idemo</HeaderLinksButton>
         </div>
            
        </div> 
     )
}

export default HeaderLinks