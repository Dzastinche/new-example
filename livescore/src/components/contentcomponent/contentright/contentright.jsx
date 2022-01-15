import { useSelector } from 'react-redux'
import './contentright.scss'
import Modals from './modal'
const Rightside=()=>{
    const novosti=useSelector(state=>state.novosti[0][0])
    let count=5
    return(
                    <div className="stuck">
            {novosti.map((el)=>{
                {count+=1}
                return(
                    <div key={count+1}>
                        
                        <h3>{el.title}</h3>
                        <img className='news-img' alt='noImg' src={`${el.urlToImage}`}></img>
                        <Modals news={el}></Modals>
                    </div>
                    
                )
            })}
        </div>
 

    )
}
export default Rightside