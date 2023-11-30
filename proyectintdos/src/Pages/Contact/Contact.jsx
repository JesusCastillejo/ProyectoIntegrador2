import './styles.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            if (name.trim() === '') {
                toast.info('El campo de nombre no puede estar vacío.');
                // alert('El campo de nombre no puede estar vacío.');
                return;
            }
            if (name.length < 2 || name.length > 15) {
                // alert('El nombre debe tener entre 2 y 15 caracteres.');
                return;
            }
            if (!/^[\u00C0-\u017Fa-zA-Z\s]+$/.test(name)) {
                // alert('El nombre solo debe contener caracteres en español.');
                return;
            }

            if (!/^\d+$/.test(phone.trim())) {
                toast.info('El campo de teléfono solo debe contener números.');
                // alert('El campo de teléfono solo debe contener números.');
                return;
            }

            if (email.trim() === '') {
                toast.info('El campo de correo electrónico no puede estar vacío.');
                // alert('El campo de correo electrónico no puede estar vacío.');
                return;
            }
            if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.trim())) {
                toast.info('Por favor, introduce una dirección de correo electrónico válida.');
                // alert('Por favor, introduce una dirección de correo electrónico válida.');
                return;
            }

            if (!/^[\u00C0-\u017Fa-zA-Z\s]+$/.test(comment.trim())) {
                toast.info('El comentario no debe estar vacio');
                // alert('El comentario solo debe contener caracteres en español.');
                return;
            }
            if (comment.length > 2000) {
                toast.info('El comentario no debe tener más de 2000 caracteres.');
                // alert('El comentario no debe tener más de 2000 caracteres.');
                return;
            }

            toast.success('¡Validación exitosa!');
            setName('');
            setPhone('');
            setEmail('');
            setComment('');
        } catch (error) {
            toast.error("Hubo un error al enviar el formulario.");
        }
    };


    return (
        <>
            <div>
                <section id="toys" class="toy">
                    <h1>Contacto</h1>
                </section>
            </div>
            <main class="contact">
                <form id="FormDos" className="formContact" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono:</label>
                        <input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="comment">Comentario:</label>
                        <textarea id="comment" name="comment" maxLength="2000" value={comment} onChange={e => setComment(e.target.value)}></textarea>
                    </div>
                    <div className="button">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </main>
            <ToastContainer />
        </>
    );
}

export default Contact;
