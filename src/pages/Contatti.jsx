import React from "react";
import { Link } from "react-router-dom";
import "../style/contatti.css";
import { ArrowLeftShort } from "react-bootstrap-icons";

function Contatti() {
    return (
        <section className="sectionContatti w-100">
            <Link to="/" className="back-arrow" title="Torna alla Dashboard">
                <ArrowLeftShort size={32} />
            </Link>

            <div className="contatti-wrapper">
                
                {/* Sezione Sinistra: Info di Contatto */}
                <div className="contatti-info-box fs-3">
                    <div className="d-flex align-items-center gap-4">
                        <div className="cerchio-telefono d-flex align-items-center justify-content-center" style={{ width: "55px", height: "55px" }}>
                            <i className="icona bi bi-telephone"></i>
                        </div>
                        <a href="tel:+393802617129" className="text-decoration-none text-dark">3802617129</a>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <i className="icona bi bi-envelope"></i>
                        <a href="mailto:alemanolache109@gmail.com" className="text-decoration-none text-dark">alemanolache109@gmail.com</a>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <i className="icona bi bi-geo-alt"></i>
                        <span className="text-dark">Brescia (BS)</span>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <i className="icona bi bi-git"></i>
                        <a 
                            href="https://github.com/alexa109445" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-decoration-none text-dark border-bottom border-dark"
                        >
                            Profilo GitHub
                        </a>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <i className="icona bi bi-linkedin"></i>
                        <a 
                            href="https://www.linkedin.com/in/alexandramanolache/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-decoration-none text-dark border-bottom border-dark"
                        >
                            Profilo LinkedIn
                        </a>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <i className="icona bi bi-cake2"></i>
                        <span className="text-dark">18/12/2001</span>
                    </div>
                </div>

                {/* Sezione Destra: Form Mail con il tuo link Formspree */}
                <div className="contatti-form-box">
                    <h2 className="form-titolo">Hai bisogno di qualcosa? Scrivimi! ✉️</h2>
                    <p className="form-sottotitolo">Compila i campi qui sotto per inviarmi un messaggio direttamente sulla mia casella di posta.</p>
                    
                    <form action="https://formspree.io/f/xdaralgo" method="POST" className="mail-form">
                        <div className="form-group mb-3">
                            <label htmlFor="email">La tua Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="form-control custom-input" 
                                placeholder="nome@esempio.com" 
                                required 
                            />
                        </div>
                        
                        <div className="form-group mb-4">
                            <label htmlFor="messaggio">Messaggio</label>
                            <textarea 
                                name="message" 
                                id="messaggio" 
                                rows="5" 
                                className="form-control custom-input" 
                                placeholder="Scrivi qui il tuo messaggio..." 
                                required
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="btn-invia-form">Invia Messaggio</button>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contatti;