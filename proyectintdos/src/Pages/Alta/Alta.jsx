import './styles.css'
import React, { useState } from 'react';
import {ToastContainer, toast} from "react-toastify";

const Alta = () => {
  const initialState = {
    nombre: '',
    stock: '',
    marca: '',
    categoria: '',
    descripcion: '',
    descripcionlarga: '',
    precio: '',
    edad: '',
    foto: '',
    envio: ''
  };

  const [form, setForm] = useState(initialState);
  const [freeShipping, setFreeShipping] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePriceChange = (e) => {
    if (isNaN(e.target.value)) {
      alert('El campo precio solo debe aceptar números');
      return;
    }
    form.precio = e.target.value;
    handleChange(e);
    setFreeShipping(form.precio >= 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (form.nombre === '' || form.nombre.length < 2 || form.nombre.length > 25 || !/^[\u00C0-\u00FFa-zA-Z\s,.\-¿?¡!]+$/.test(form.nombre)) {
      toast.info('El campo nombre no puede estar vacio')
      // alert('El campo nombre debe tener entre 2 y 15 caracteres y solo debe aceptar caracteres en español, comas, puntos, signos de interrogación, signos de exclamación y guiones');
      return;
    }


    if (form.stock === '' || isNaN(form.stock) || form.stock < 1 || form.stock > 1000) {
      toast.info('EL campo solo acepta numeros');
      // alert('El campo stock solo debe aceptar números entre 1 y 1000');
      return;
    }

    if (form.marca === '') {
      toast.info('Debe elegir una opción del campo de selección marca');
      // alert('Debe elegir una opción del campo de selección marca');
      return;
    }

    if (form.categoria === '') {
      toast.info('Debe elegir una categoría del campo de selección');
      // alert('Debe elegir una categoría del campo de selección y el campo no debe estar vacío');
      return;
    }

    if (!/^[\u00C0-\u00FFa-zA-Z\s,.\-¿?¡!]+$/.test(form.descripcion) || form.descripcion.length < 3 || form.descripcion.length > 30) {
      toast.info('El campo descripcion no debe estar vacio');
      // alert('El campo descripción debe tener entre 5 y 30 caracteres y solo debe aceptar caracteres en español, comas, puntos, signos de interrogación, signos de exclamación y guiones');
      return;
    }


    if (!/^[\u00C0-\u00FFa-zA-Z\s,.\-¿?¡!]+$/.test(form.descripcionlarga) || form.descripcionlarga.length < 5 || form.descripcionlarga.length > 1000) {
      toast.info('el campo descripcion larga no debe estar vacio');
      // alert('El campo descripción larga debe tener entre 5 y 1000 caracteres y solo debe aceptar caracteres en español, comas, puntos, signos de interrogación, signos de exclamación y guiones');
      return;
    }


    if (isNaN(form.precio)) {
      toast.info('El campo precio solo acepta numeros y no debe estar vacio');
      // alert('El campo precio solo debe aceptar números');
      return;
    }

    if (form.precio >= 3000) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }

    if (form.edad === '') {
      toast.info('El campo edad no debe estar vacio');
      // alert('El campo edad no debe estar vacío');
      return;
    }

    if (!form.foto) {
      toast.info('El campo foto no debe estar vacio');
      // alert('El campo foto no debe estar vacío');
      return;
    } else if (!/\.(img|png|svg|jpg)$/i.test(form.foto)) {
      toast.info('Solo se aceptan imágenes en formato img, png, svg o jpg');
      // alert('Solo se aceptan imágenes en formato img, png, svg o jpg');
      return;
    }

    const response = await fetch('https://655804fa9c0b643cb2d6cdb4.mockapi.io/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      toast.success('Datos enviados con éxito')
      console.log('Datos enviados con éxito');
      setForm(initialState); // Reinicia el formulario
    } else {
      toast.error('Error al enviar los datos')
      console.log('Error al enviar los datos');
    }
  };

  return (
    <>
      <div>
        <section id="toys" class="toy">
          <h1>Alta</h1>
        </section>
      </div>
      <article className="formAlta">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" onChange={handleChange} value={form.nombre} />
          </div>
          <div>
            <label htmlFor="stock">Stock:</label>
            <input className='formstock' type="number" id="stock" name="stock" min="1" max="1000" onChange={handleChange} value={form.stock} />
          </div>
          <div>
            <label htmlFor="marca">Marca:</label>
            <select id="marca" name="marca" onChange={handleChange} value={form.marca}>
              <option value="">--Seleccione una Marca--</option>
              <option value="poggy">Poggy</option>
              <option value="homesweet">Homesweet</option>
              <option value="cango">Cango</option>
            </select>
          </div>
          <div>
            <label htmlFor="categoria">Categoría:</label>
            <select id="categoria" name="categoria" onChange={handleChange} value={form.categoria}>
              <option value="">--Seleccione una Categoría--</option>
              <option value="juguete">Juguete</option>
              <option value="ropa">Ropa</option>
              <option value="huesos">Huesos</option>
              <option value="comederos">Comederos</option>
              <option value="collares">Collares</option>
              <option value="cuerdas">Cuerdas</option>
            </select>
          </div>
          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <input type="text" id="descripcion" name="descripcion" onChange={handleChange} value={form.descripcion} />
          </div>
          <div>
            <label htmlFor="descripcion-larga">Descripción larga:</label>
            <textarea id="descripcion-larga" name="descripcionlarga" rows="4" cols="50" onChange={handleChange} value={form.descripcionlarga}></textarea>
          </div>
          <div>
            <label htmlFor="precio">Precio:</label>
            <input type="text" id="precio" name="precio" onChange={handlePriceChange} value={form.precio} />
            <br />
            <label>Envío:</label>
            <input type="radio" id="envio" name="envio" value="envio" onChange={handleChange} checked={form.envio === 'envio'} />
            <label htmlFor="envio">Envío</label>
            <input type="radio" id="envio-rapido" name="envio" value="envio-rapido" onChange={handleChange} checked={form.envio === 'envio-rapido'} />
            <label htmlFor="envio-rapido">Envío rápido</label>
            <input type="radio" id="envio-sin-cargo" name="envio" value="envio-sin-cargo" onChange={handleChange} checked={form.envio === 'envio-sin-cargo'} style={{ display: form.precio >= 3000 ? 'inline' : 'none' }} />
            <label htmlFor="envio-sin-cargo" style={{ display: form.precio >= 3000 ? 'inline' : 'none' }}>Envío sin cargo</label>
            <br />
          </div>
          <div>
            <label htmlFor="edad">Edad:</label>
            <select id="edad" name="edad" onChange={handleChange} value={form.edad}>
              <option value="">--Seleccione la edad--</option>
              <option value="1 años">1 años</option>
              <option value="2 años">+2 años</option>
              <option value="5 años">+5 años</option>
              <option value="10 años">+10 años</option>
              <option value="+12 años">+12 años</option>
            </select>
          </div>
          <div>
            <label htmlFor="foto">Foto:</label>
            <input type="file" id="foto" name="foto" accept=".img,.png,.svg,.jpg" onChange={handleChange} />
          </div>
          <div className="button">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </article>
      <ToastContainer/>
    </>
  );
};

export default Alta;
