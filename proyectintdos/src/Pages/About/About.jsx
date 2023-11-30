import './styles.css';
import React from 'react';
import Amys from './Icon/Amy.jpeg';


const About = () => {
    return (
        <>
            <div>
                <section id="toys" class="toy">
                    <h1>Nosotros</h1>
                </section>
            </div>
            <main className="mainus">
                <section className="us">
                    <article className="artus">
                        <picture>
                            <img src={Amys} alt="" />
                        </picture>
                        <div>
                            <h1>AMY</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nihil eveniet iure ullam corporis itaque culpa aliquam at veritatis odit sapiente porro iusto ratione ex eius dolore nam, illum nemo magnam cumque labore alias consequatur molestiae rerum? Aperiam magnam qui, ea hic commodi at temporibus id, eveniet aliquid reiciendis molestias!</p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
};

export default About;
