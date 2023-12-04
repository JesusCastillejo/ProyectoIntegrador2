import './styles.css'
import React, { useEffect, useState } from 'react';
import iconcart from './Icon/iconcart.svg';
import { ToastContainer, toast } from "react-toastify";

const Home = ({ setCart, search }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://655804fa9c0b643cb2d6cdb4.mockapi.io/productos', {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    try {
      setCart(currentCart => {
        const index = currentCart.findIndex(cartItem => cartItem.id === item.id);
        if (index >= 0) {
          const newCart = [...currentCart];
          newCart[index].quantity += 1;
          toast.success("Producto agregado al carrito con éxito!");
          return newCart;
        } else {
          const newItem = { ...item, quantity: 1 };
          toast.success("Producto agregado al carrito con éxito!");
          return [...currentCart, newItem];
        }
      });
    } catch (error) {
      toast.error("Hubo un error al agregar el producto al carrito.");
    }
  };

  const filteredData = data.filter(item => item.nombre.toLowerCase().includes(search.toLowerCase()) || item.marca.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div>
        <section id="toys" class="toy">
          <h1>Accesorios</h1>
        </section>
      </div>
      <main className="main">
        {filteredData.length > 0 ? (
          filteredData.map((item, key) => (
            <div className="accesory" key={key}>
              <article>
                <picture>
                  <img src={item.foto} alt={item.nombre} />
                </picture>

                <section>
                  <h2>{item.nombre}</h2>
                  <h3><span className="by">de</span> {item.marca}</h3>
                  <p>{item.descripcionlarga}</p>
                  <div className="precios">
                    <h2>${item.precio * 0.85}</h2>
                    <p className="precio-linea">${item.precio}</p>
                  </div>
                  <div className="boton">
                    <button onClick={() => addToCart(item)}>
                      <img src={iconcart} alt="" />
                      Comprar
                    </button>
                  </div>
                </section>
              </article>
            </div>
          ))
        ) : (
          <p className='errorAccesorios'>No se encontró el producto</p>
        )}
        <ToastContainer />
      </main>
    </>
  );
};

export default Home;
