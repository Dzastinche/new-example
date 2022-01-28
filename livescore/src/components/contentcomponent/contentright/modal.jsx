import React from 'react'
import {Modal,ModalTitle,ModalBody,ModalFooter} from 'react-bootstrap'
import ModalHeader from "react-bootstrap/ModalHeader"
import './modal.scss'
const Modals=({news})=>{
  const[isOpened,change] = React.useState(false)
return(
    <>
    <button className='btn-primary' onClick={()=>{change(true)}}>Show More</button>
    <Modal size='lg' show={isOpened}>
      <ModalHeader>
        <ModalTitle style={{fontSize:'20px'}}>{news.title}</ModalTitle>
      </ModalHeader>
      <ModalBody style={{fontSize:'20px'}}>
        <p>{news.content}</p>
        <img style={{width:'100%'}} src={`${news.urlToImage}`}></img>
        <a href={`${news.url}`}>More about this...</a></ModalBody>
      <ModalFooter>
      <button className='btn-primary' onClick={()=>{change(false)}}>Close</button>
      </ModalFooter>
    </Modal>
    </>
)
}
export default Modals