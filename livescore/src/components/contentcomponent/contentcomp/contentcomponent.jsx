import React, { useEffect } from 'react'
import './contentcomponent.scss'
import Sidebar from '../contentleftside/contentleftside'
import ContentCenter from '../contentcenter/contentcenter'
import {useSelector,useDispatch} from 'react-redux'
import Loader from '../../loadercomponent/loader'
import Rightside from '../contentright/contentright'
import { Routes,Route} from 'react-router-dom'
const Content = ()=>{
    let utakmice=useSelector((state) => state.todaygames);
    let loaded=useSelector((state)=> state.todaygames.loading);
    let favorite=useSelector((state)=>state.favGames)
    useEffect(()=>{
        },[utakmice.loaded])
        if (loaded==false){
            return(
                
                <div className='container__mainInner'>

                <Sidebar></Sidebar>
                <div className='container__liveTableWrapper sport_page'>
                    <Routes>
                    <Route path="/" exact element={<ContentCenter utakmice={utakmice.utakmice[0].matches}></ContentCenter>}></Route>
                    <Route path='favorite' exact element={<ContentCenter fav={true} utakmice={favorite}></ContentCenter>}></Route>
                    </Routes>
                </div>
                <Rightside></Rightside>
            </div>
            )
        }
        else return(<Loader></Loader>)

}

export default Content