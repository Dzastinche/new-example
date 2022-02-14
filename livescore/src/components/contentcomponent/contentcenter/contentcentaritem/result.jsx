import './ressult.scss'
const Ressult=({game})=>{
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