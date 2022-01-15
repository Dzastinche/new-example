import { useSelector,useDispatch } from "react-redux"
import {addgametofavorite} from '../../../../../redux/actions/actions'

export const Addfavorite=({spec})=>{
    let stateforfavorite=useSelector((state)=> state.favGames)
    let dispatch=useDispatch()
    return (
        <button onClick={()=>{dispatch(addgametofavorite(spec))}} className='FavoriteButton_favorite__3KKUK MatchRow_matchFavoriteButton__2JtRz btn btn-success'>
                {console.log(stateforfavorite)}+
            </button>
    )
}
