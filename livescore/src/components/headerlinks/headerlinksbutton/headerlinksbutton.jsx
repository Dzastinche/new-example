import React from 'react'
import {Link} from 'react-router-dom'
import './headerlinksbutton.scss'

export const HeaderLinksButton = ({name,...props})=>{
    console.log(props,'dss')
    return(
        <>
        <Link to='/' className='menuTop__item menuTop__text'>Sve utakmice</Link>
        <Link to='/favorite' className='menuTop__item menuTop__text'>Odabrane</Link></>
        
        
    )
}