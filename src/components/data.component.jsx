import React ,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "./button.component";

const Data = () => {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button label={"Show Data"} handleClick={() => setShow(true)}/>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

           <h4>Time Taken : </h4>            
            <p>
              huihaaa
            </p>
            <br/>
            <h4>Path Followed : </h4>            
            <p>
              huhaa
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Data;