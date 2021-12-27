const FootballGame=({nesto,game})=>{
    console.log(game,nesto)
    return  (
        <div className='MatchRow_matchRowWrapper__1BtJ3'>
        <span className='MatchRowTime_root__3E8cU MatchRowTime_isCentered__1Gp8h'>
            <span className='MatchRowTime_time__2Fkd2'></span>
        </span>
        <div className='MatchRow_teams__3Bqbv'>
            <div className='MatchRow_home__pkUrB'>{game.homeTeam.name}</div>
            <div className='MatchRow_away__1kkKT'>{game.awayTeam.name}</div>
        </div>
        <div className='MatchRow_score__34WYX'>{game.score.fullTime.homeTeam} vs {game.score.fullTime.awayTeam}</div>
        <div className='MatchRow_favoriteButtonWrapper__3_0DG'>
            <button style={{fontSize:20}} className='FavoriteButton_favorite__3KKUK MatchRow_matchFavoriteButton__2JtRz'>
                Dodaj u omiljene
            </button>
        </div>

    </div>
    )
}
export default FootballGame;