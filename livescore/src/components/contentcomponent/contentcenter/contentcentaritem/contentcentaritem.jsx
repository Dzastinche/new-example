import "./contentcentaritem.scss"
import {Addfavorite} from "./addfavorite/addfavorite" 
const FootballGame=({game})=>{
    console.log(game.id)
    return  (
        <div className='MatchRow_matchRowWrapper__1BtJ3'>
        <span className='MatchRowTime_root__3E8cU MatchRowTime_isCentered__1Gp8h'>
            <span className='MatchRowTime_time__2Fkd2'></span>
        </span>
        <div className='MatchRow_teams__3Bqbv'>
            <div className='MatchRow_home__pkUrB'>{game.homeTeam.name}</div>
            <div className='MatchRow_score__34WYX'>{game.score.fullTime.homeTeam} vs {game.score.fullTime.awayTeam}</div>
            <div className='MatchRow_away__1kkKT'>{game.awayTeam.name}</div>
        </div>
        
        <div className='MatchRow_favoriteButtonWrapper__3_0DG'>
            <Addfavorite spec={game}></Addfavorite>
        </div>

    </div>
    )
}
export default FootballGame;