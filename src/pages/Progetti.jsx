import React from "react";
import '../style/progetti.css';
import { Link } from "react-router-dom";
import { ArrowLeftShort } from "react-bootstrap-icons";

function Progetti() {
    return (
        <section className="sectionProgetti">
            <Link to="/" className="back-arrow" title="Torna alla Dashboard">
                <ArrowLeftShort size={32} />
            </Link>
            
            <h1 className="titolo">I miei progetti</h1>
            
            <div className="progetti-container">
                <Link to="/centup" className="card-base progetti-card text-decoration-none text-dark">
                    <h2 className="card-title">CentUp</h2>
                    <p className="card-text">Applicazione di risparmio personale</p>
                </Link>

                <Link to="/gestioneEventi" className="card-base progetti-card">
                    <h2 className="card-title">Gestione Eventi</h2>
                    <p className="card-text">Applicazione per la gestione degli eventi</p>
                </Link>

                <Link to="/appMeteo" className="card-base progetti-card">
                    <h2 className="card-title">Applicazione Meteo</h2>
                    <p className="card-text">Sviluppo di un'applicazione meteo</p>
                </Link>
            </div>
        </section>
    );
}

export default Progetti;