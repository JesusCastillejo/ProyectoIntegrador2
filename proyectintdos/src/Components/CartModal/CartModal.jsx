import './Styles.css'
import React from 'react';
import Modal from 'react-modal';
import CartItem from '../CartItem/CartItem';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "auto",
    color: "black",
    padding: 0,
  },
};

Modal.setAppElement('#root')

function CartModal({ isOpen, closeModal, cartItems, onIncrease, onDecrease, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal de Carrito"
    >
      <div className='headermodal'>
        <h2>Carrito</h2>
        <button onClick={closeModal}><i class="fa fa-times" aria-hidden="true"></i></button>
      </div>

      <div>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>

      <div className='total'>
        <h3>Total: ${total}</h3>
      </div>

      <div className='checkout'>
        <button>Comprar</button>
      </div>
    </Modal>
  );
}

export default CartModal;
