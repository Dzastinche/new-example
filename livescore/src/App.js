import {Header} from './components/headercomponent/headercomponent'
import './App.scss';
import React,{Component} from 'react'
import HeaderLinks from './components/headerlinks/headerlinks'
import {Route} from 'react-router-dom'
import Content from './components/contentcomponent/contentcomp/contentcomponent.jsx'
import store from './redux/store'
import { fetchGames,practice,start} from './redux/actions/actions';
window.addEventListener('load',()=>{
store.dispatch(start)
})

class App extends Component{
  constructor(){
    super()
  
  }
  componentDidMount(){
    store.dispatch(fetchGames())
    
  }
  render(){
    
    return(
    <div className='all'>
        <Header></Header>
        <HeaderLinks ></HeaderLinks>
        <Content></Content>
        <button style={{fontSize: 30,width:50,height:50}} onClick={()=>{store.dispatch(practice());console.log(store.getState())}}>klikniii</button>
        <Route path='/' component={()=>{<HeaderLinks sports={this.state.fudbal}></HeaderLinks>},console.log(this.state)}></Route>
    </div>
      
    )
    
  }
}

export default App;
