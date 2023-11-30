import React from 'react';
import './styles.css';
import dogface from './Icon/dogface.svg';
import iconemail from './Icon/iconemail.svg';
import iconphone from './Icon/iconphone.svg';
import iconlocation from './Icon/iconlocation.svg'

const Footer = () => {
    return (
        <footer className="Footer">
            <img src={dogface} alt="Logo" height="60px" />
            <section className="contact">
                <article className="column1">
                    <ul>
                        <li>
                            <div className="tools">
                                <img src={iconlocation} alt="Location" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </li>

                        <li>
                            <div className="tools">
                                <img src={iconphone} alt="Phone" />
                                <p>+54-11-1234-5678</p>
                            </div>
                        </li>

                        <li>
                            <div className="tools">
                                <img src={iconemail} alt="Email" />
                                <p>Shop@Amy.com</p>
                            </div>
                        </li>
                    </ul>
                </article>

                <article className="column2">
                    <ul>
                        <li>Nosotros</li>
                        <li>Marcas</li>
                        <li>FAQ</li>
                    </ul>
                </article>

                <article className="column3">
                    <ul>
                        <li>Nuesta vision</li>
                        <li>Blog</li>
                        <li>Contactanos</li>
                    </ul>
                </article>

                <article className="column4">
                    <ul className="social">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </article>
            </section>
            <article className="copy">
                <p>© Copyright 2023-2024 Amy's Shop. All rights reserved.</p>
            </article>
        </footer>
    );
}

export default Footer;
