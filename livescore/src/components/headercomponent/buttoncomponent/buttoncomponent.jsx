import React from 'react'
import './buttoncomponent.scss'

export const Buttonm=({called})=>{
    console.log(called)
    return(
        <button className='button'>{called}</button>
        
    )
}