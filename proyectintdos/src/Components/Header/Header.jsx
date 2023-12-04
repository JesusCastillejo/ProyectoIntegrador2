import React from 'react';
import './styles.css';
import dogfacesvg from './icon/dogfacesvg.svg';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal.jsx';
import iconcart from '../../Pages/Home/Icon/iconcart.svg';

const Header = ({ cartItems, setCart, search, setSearch }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onIncrease = (item) => {
        setCart(currentCart => {
            const index = currentCart.findIndex(cartItem => cartItem.id === item.id);
            if (index >= 0) {
                const newCart = [...currentCart];
                newCart[index].quantity += 1;
                return newCart;
            } else {
                return [...currentCart, { ...item, quantity: 1 }];
            }
        });
    };

    const onDecrease = (item) => {
        setCart(currentCart => {
            const index = currentCart.findIndex(cartItem => cartItem.id === item.id);
            if (index >= 0) {
                const newCart = [...currentCart];
                if (newCart[index].quantity > 1) {
                    newCart[index].quantity -= 1;
                } else {
                    newCart.splice(index, 1);
                }
                return newCart;
            }
            return currentCart;
        });
    };

    const onRemove = (item) => {
        setCart(currentCart => {
            const newCart = currentCart.filter(cartItem => cartItem.id !== item.id);
            return newCart;
        });
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={dogfacesvg} alt="Logo" height="80px" />
                <h1>Amy's Shop</h1>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Buscar productos" value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="img-back">
                    <button></button>
                </div>
            </div>

            <nav className="nav">
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className="nav-links">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Alta'}>Alta</Link></li>
                    <li><Link to={'/Contact'}>Contacto</Link></li>
                    <li><Link to={'/About'}>Nosotros</Link></li>
                </ul>
            </nav>
            <button className='modalbutton' onClick={openModal}>
                <img src={iconcart} alt="" />
            </button>
            <CartModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                cartItems={cartItems}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
            />
        </header>
    );
}

export default Header;
