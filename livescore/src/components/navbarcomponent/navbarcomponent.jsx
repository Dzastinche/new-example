import React from 'react';
import Navbar from 'react-bootstrap/navbar'
import Nav from 'react-bootstrap/nav'
import {Buttonm} from '../../components/headercomponent/buttoncomponent/buttoncomponent'
import {Link} from 'react-router-dom'

export const NavigationBar = ()=>{
       return(
       <Navbar variant="dark" className='w-100'>
        <Nav className="d-flex justify-content-around w-100">
            <Link to='/#'><Buttonm called={<ion-icon size='large' name="search-outline"></ion-icon>}></Buttonm></Link>     
            <Link to='/#' href="#features"><Buttonm called={<ion-icon size='large' name="settings-outline"></ion-icon>}></Buttonm></Link>
            <Link to='/#' href="#pricing"><Buttonm called={"Prijava"}></Buttonm></Link>
        </Nav>
      </Navbar>)
      }
    
