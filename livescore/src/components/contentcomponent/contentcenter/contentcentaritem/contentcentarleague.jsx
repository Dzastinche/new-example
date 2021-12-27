import FootballGame from './contentcentaritem.jsx'
export const League=({competition,id})=>{
    return(
    competition.map((game)=>{
            console.log(game.competition.id==id)
            if(game.competition.id==id)
            { return <FootballGame key={game.id} game={game} nesto={id}></FootballGame> }
            else{
                return null
            }
              
               }

                
            
        )
    )
}