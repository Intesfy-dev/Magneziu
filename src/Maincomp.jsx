import React, { useState, useEffect, useRef } from 'react';
import './Maincomp.css';

const continut = [
    { id: 0, text: "Acesta va fi paragraful 1.", imagine: "Imaginea 1" },
    { id: 1, text: "Acesta va fi al 2-lea paragraf.", imagine: "Imaginea 2" },
    { id: 2, text: "Acesta va fi al 3-lea paragraf.", imagine: "Imaginea 3" },
    { id: 3, text: "Acesta va fi ultimul paragraf.", imagine: "Imaginea 4" }
];

function Maincomp() {
    const [sectiuneActiva, setSectiuneActiva] = useState(0);
    const paragrafeRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSectiuneActiva(Number(entry.target.id)); 
                }
            });
        }, {
            rootMargin: "-50% 0px -50% 0px" 
        });

        paragrafeRefs.current.forEach((paragraf) => {
            if (paragraf) observer.observe(paragraf);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
        <main className="Main-container">
            <div className="LeftCollum">
                {continut.map((item, index) => (
                    <p 
                        key={item.id} 
                        id={item.id}
                        className="StartPar"
                        ref={(element) => paragrafeRefs.current[index] = element}
                    >
                        {item.text}
                    </p>
                ))}
            </div>

           <div className="RightCollum">
                <div className="placeholder-image">
                    {continut.map((item, index) => (
                        <div 
                            key={`img-${item.id}`} 
                            className={`slide-imagine ${sectiuneActiva === index ? 'activa' : ''}`}
                        >
                            <h2>{item.imagine}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <br></br>
        </>
    );
}

export default Maincomp;