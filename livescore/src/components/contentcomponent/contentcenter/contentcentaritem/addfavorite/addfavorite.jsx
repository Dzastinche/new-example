import { useSelector,useDispatch } from "react-redux"
import {addgametofavorite, deleteFavGame} from '../../../../../redux/actions/actions'

export const Addfavorite=({spec,fav})=>{
    let stateforfavorite=useSelector((state)=> state.favGames)
    let dispatch=useDispatch()
    if(fav==true){
        return (
            <button onClick={()=>{dispatch(deleteFavGame(spec))}} className='FavoriteButton_favorite__3KKUK MatchRow_matchFavoriteButton__2JtRz btn btn-danger'>
                    -
            </button>
        )
    }
    else{
        return (
            <button onClick={()=>{dispatch(addgametofavorite(spec))}} className='FavoriteButton_favorite__3KKUK MatchRow_matchFavoriteButton__2JtRz btn btn-success'>
                    +
            </button>
        )
    }
    
}
