import './contentcenter.scss'
import {League} from './contentcentaritem/contentcentarleague'


const ContentCenter=({utakmice,fav})=>{
    let champ=[]
    return (
        
        <div className='container__liveTableWrapper sport_page'>
        {utakmice.map((utakmica)=>{
            if (champ.includes(utakmica.competition.id)){
                    return null
             }
             else {
                    champ.push(utakmica.competition.id)
                    console.log('champ',champ,utakmice,utakmica)
                    return(
                        <League fav={fav} key={utakmica.competition.id} id={utakmica.competition.id} comp={utakmica.competition} allcomp={utakmice}></League>
                        
                    )
                    
            }
        })}
        <div className='selected'>eee</div>
        </div>
    )
}
export default ContentCenter


           
        