import "./contentcentaritem.scss"
import {Addfavorite} from "./addfavorite/addfavorite" 
import Check from "../../contentleftside/leftsideitem/fft"
const FootballGame=({game,fav})=>{
    console.log(game.id)
    return  (
        <div className='MatchRow_matchRowWrapper__1BtJ3'>
        <span className='MatchRowTime_root__3E8cU MatchRowTime_isCentered__1Gp8h'>
            <span className='MatchRowTime_time__2Fkd2'></span>
        </span>
        <div className='MatchRow_teams__3Bqbv'>
            <div className='MatchRow_home__pkUrB'>{game.homeTeam.name}</div>
            <div className='MatchRow_score__34WYX'>{Check(game)}</div>
            <div className='MatchRow_away__1kkKT'>{game.awayTeam.name}</div>
        </div>
        
        <div className='MatchRow_favoriteButtonWrapper__3_0DG'>
            <Addfavorite fav={fav} spec={game}></Addfavorite>
        </div>

    </div>
    )
}
export default FootballGame;