import FootballGame from './contentcentaritem.jsx'
import './contentcentarleague.scss'
export const League=({id,allcomp,comp,fav})=>{
    console.log(id,allcomp)
    return(
            <div className='nesto'>
                <div className='event__header top'>
                    <img className='flag' src={comp.area.ensignUrl}></img>
                <h1>{comp.name}</h1>
                    <img className='flag' src={comp.area.ensignUrl}></img>
                </div>
                    {allcomp.map((game)=>{
                        if(game.competition.id==id)
                            { return (
                                <FootballGame fav={fav} key={game.id} game={game} nesto={id}></FootballGame>
                            )
                            }
                        else{
                            return null}
                        }

                )}
            </div>
    
    )
}