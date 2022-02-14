import './ressult.scss'
import {useEffect} from 'react'
const Ressult=({game})=>{
    useEffect(()=>{},[game])
    return (
        <div className="ress">
            <div>{game.home}
            </div>
            <div>:</div>
            <div>{game.away}</div>
        </div>
    )
}
export default Ressult