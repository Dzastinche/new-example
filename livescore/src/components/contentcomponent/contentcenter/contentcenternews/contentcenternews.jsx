import './contentcenter.scss'
import Modals from '../../contentright/modal'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../../loadercomponent/loader'

const NewsPage=()=>{
    let vijesti=useSelector(state=>state.novosti[0])
    useEffect(()=>{     
    },[vijesti])
    console.log(vijesti);
    if(vijesti!==undefined){
        return(
                <div className="NewsPage">
                    {vijesti[0].map((el)=>{
                        
                        return( 
                        <div className="new" >
                            <div className="new-img" style={{backgroundImage:`url(${el.urlToImage})`}}></div>
                            <h2>{el.title}</h2>
                            <p>{el.description}...</p>
                            <Modals news={el}></Modals>
                        </div>)
                    })}
                </div>)
    }
    else{
        return <Loader></Loader>
    }
    
}
export default NewsPage