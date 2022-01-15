import React from 'react'
import './contentleftside.scss'
import {LefSideItem} from './leftsideitem/leftsideitem'
class Sidebar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='container__myMenu menu country-list my-leagues leftMenu myTeamsWrapper side'>
                <h1>leva</h1>
                <LefSideItem></LefSideItem>
            </div>
        )
    }
}
export default Sidebar