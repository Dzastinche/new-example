import React from 'react'
import './headercomponent.scss'
import mainLogo from '../../img/logo.png'
import {NavigationBar} from './../navbarcomponent/navbarcomponent'

export const Header=()=>{
    return(
        <div className='header'>
        <div className='header-logoside'>
        <img src={mainLogo}  className='header-logoside-logo'></img>
        </div>
        <h1>Rezultati uživo</h1>
        <div className='header-anotherside'>
            <NavigationBar></NavigationBar>
        </div>
        </div>
    )
}