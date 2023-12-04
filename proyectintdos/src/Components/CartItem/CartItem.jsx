import React from 'react';
import './styles.css';
import { ToastContainer, toast } from "react-toastify";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const handleIncrease = () => {
    try {
      onIncrease(item);
      toast.success("Producto sumado");
    } catch (error) {
      toast.error("Hubo un error al sumar el producto.");
    }
  };

  const handleDecrease = () => {
    try {
      if (item.quantity === 1) {
        onRemove(item);
        toast.success("Producto eliminado con éxito!");
      } else {
        onDecrease(item);
        toast.success("Un producto eliminado del carrito");
      }
    } catch (error) {
      toast.error("Hubo un error al restar el producto.");
    }
  };

  const handleRemove = () => {
    try {
      onRemove(item);
      toast.success("Producto eliminado con éxito!");
    } catch (error) {
      toast.error("Hubo un error al eliminar el producto.");
    }
  };

  const totalPrice = item.precio * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.foto} alt={item.nombre} />
      <h2>{item.nombre}</h2>
      <h3>${totalPrice}</h3>
      <div className='divCounter'>
        <button className='moreless' onClick={handleIncrease}><i class="fa fa-plus" aria-hidden="true"></i></button>
        <input className="counter" type="number" value={item.quantity} readOnly />
        <button className='moreless' onClick={handleDecrease}><i class="fa fa-minus" aria-hidden="true"></i></button>
      </div>
      <button className='trash' onClick={handleRemove}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    </div>
  );
};

export default CartItem;
