import {Header} from './components/headercomponent/headercomponent'
import './App.scss';
import React,{Component} from 'react'
import HeaderLinks from './components/headerlinks/headerlinks'
import {Link, Route,Routes} from 'react-router-dom'
import Content from './components/contentcomponent/contentcomp/contentcomponent.jsx'
import store from './redux/store'
import { fetchGames,Newsfor,start} from './redux/actions/actions';
import NewsPage from './components/contentcomponent/contentcenter/contentcenternews/contentcenternews'
import { connect } from 'react-redux';
import './mobilemedia.scss'
window.addEventListener('load',()=>{
store.dispatch(start)
})

class App extends Component{
  constructor(){
    super()
  }
  componentDidMount(){
    store.dispatch(fetchGames())
    store.dispatch(Newsfor())
  }

  render(){
    return(
    <div className='all'>
      
        <Header></Header>
        <HeaderLinks ></HeaderLinks>
        <Routes>
            <Route exact path='/news' element={<NewsPage news={this.props.novosti}></NewsPage>}></Route>
            <Route exact path='/*' element={<Content></Content>}></Route>
        </Routes>
    </div>
      
    )
    
  }
}
const mapStateToProps=(state)=>{
  return {
    state:state
  }
}
export default connect(mapStateToProps)(App);
