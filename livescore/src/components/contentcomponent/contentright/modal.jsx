import React from 'react'
import {Modal,ModalTitle,ModalBody,ModalFooter} from 'react-bootstrap'
import ModalHeader from "react-bootstrap/ModalHeader"
const Modals=({news})=>{
  const[isOpened,change] = React.useState(false)
    console.log(news)
return(
    <>
    <button className='btn-primary' onClick={()=>{change(true)}}>Show More</button>
    <Modal show={isOpened}>
      <ModalHeader>
        <ModalTitle style={{fontSize:'20px'}}>{news.title}</ModalTitle>
      </ModalHeader>
      <ModalBody style={{fontSize:'20px'}}>{news.content}
      <a href={`${news.url}`}>
          <img style={{width:'100%'}} src={`${news.urlToImage}`}></img>
          More about this...</a></ModalBody>
      <ModalFooter>
      <button className='btn-primary' onClick={()=>{change(false)}}>Close</button>
      </ModalFooter>
    </Modal>
    </>
)
}
export default Modals