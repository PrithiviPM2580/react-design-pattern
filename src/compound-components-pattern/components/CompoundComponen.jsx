import Modal from "./Modal";
import "../index.css";
import { useState } from "react";
const CompoundComponen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="center-div">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Modal.Header>
          <h1>Welcome</h1>
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal body content.</p>
        </Modal.Body>
        <Modal.Footer>
          <button>Close</button>
          <button>Do Action</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CompoundComponen;
