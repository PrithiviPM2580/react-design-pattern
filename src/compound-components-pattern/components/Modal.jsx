const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="model-container">
        {children}
        <button className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
