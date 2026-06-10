import React from "react"
import { Link } from "react-router-dom"
import "../style/contatti.css"
import { ArrowLeftShort } from "react-bootstrap-icons";

function Contatti(){
    return(
        <section className="sectionContatti w-100">
            <Link to="/" className="back-arrow" title="Torna alla Dashboard">
                <ArrowLeftShort size={32} />
            </Link>

            <div className="d-flex flex-column fs-3" style={{ gap: "3.5rem" }}>
                
    
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
        </section>
    )
}

export default Contatti