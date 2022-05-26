import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap';
import './Detail-card.css'
export default function LikeModal({isShow,setshow}) {

    const handleClose = () => setshow(false);

  
    return (
      <div>
        <Modal style={{paddingTop:"15%",width:"45rem"}}
          show={isShow}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="like_modal"
          
        >
          <Modal.Header closeButton style={{color:'blue'}}>
        </Modal.Header>
          <Modal.Body style={{width:"40rem"}}>
          <p style={{fontSize:"2rem" ,color:"#01b2ee"}}>Please register or log in.</p>
          <p>Create your own Wishlist and share it with your friends and family!</p>
            <Button variant="primary" onClick={handleClose} style={{width:"70%",marginLeft:"4%"  }}>
              continue
            </Button>
          </Modal.Body>
  
        </Modal>
      </div>
    );
  }
