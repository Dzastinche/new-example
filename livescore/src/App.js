import {Header} from './components/headercomponent/headercomponent'
import './App.scss';
import React,{Component} from 'react'
import HeaderLinks from './components/headerlinks/headerlinks'
import {Link, Route,Routes} from 'react-router-dom'
import Content from './components/contentcomponent/contentcomp/contentcomponent.jsx'
import store from './redux/store'
import { fetchGames,News,Newsfor,practice,start} from './redux/actions/actions';
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
        <Content></Content>

        

    </div>
      
    )
    
  }
}

export default App;
