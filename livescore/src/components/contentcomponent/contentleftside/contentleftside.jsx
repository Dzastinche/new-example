import React from 'react'
import './contentleftside.scss'
import {LefSideItem} from './leftsideitem/leftsideitem'
class Sidebar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='container__myMenu menu country-list my-leagues leftMenu myTeamsWrapper'>
                <LefSideItem></LefSideItem>
            </div>
        )
    }
}
export default Sidebar