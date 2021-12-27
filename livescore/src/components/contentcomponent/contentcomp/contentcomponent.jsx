import React, { useEffect } from 'react'
import './contentcomponent.scss'
import Sidebar from '../contentleftside/contentleftside'
import ContentCenter from '../contentcenter/contentcenter'
import {useSelector,useDispatch} from 'react-redux'
import Loader from '../../loadercomponent/loader'
import { finished } from '../../../redux/actions/actions'


const Content = ()=>{
    let utakmice=useSelector((state) => state.todaygames);
    let loaded=useSelector((state)=> state.todaygames.loading);
    useEffect(()=>{
        console.log(utakmice,loaded)
    
        },[utakmice,loaded])
        if (loaded==false){
            return(
                <div className='container__mainInner'>
                <div className='container__liveTableWrapper sport_page'>
                    <Sidebar></Sidebar>
                    <ContentCenter utakmice={utakmice.utakmice[0].matches}></ContentCenter>
                </div>
            </div>
            )
        }
        else return(<Loader></Loader>)

}

export default Content