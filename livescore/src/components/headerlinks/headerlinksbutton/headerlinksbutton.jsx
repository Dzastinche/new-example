import React from 'react'
import {Link} from 'react-router-dom'
import './headerlinksbutton.scss'

export const HeaderLinksButton = ({name,...props})=>{
    console.log(props,'dss')
    return(
        <Link to='/home' className='menuTop__item menuTop__text'>link</Link>
    )
}