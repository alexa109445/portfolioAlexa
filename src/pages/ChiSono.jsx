import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftShort } from "react-bootstrap-icons";
import "../style/chiSono.css";
import fotoProfilo from "../assets/io.jpeg";

function ChiSono() {
    return (
        <section className="sectionChiSono w-100">
            <Link to="/" className="back-arrow" title="Torna alla Dashboard">
                <ArrowLeftShort size={32} />
            </Link>
            <div className="container-fluid px-5">
                <div className="row">
                    
                    <div className="col-12 col-lg-6 px-4 mb-5 mb-lg-0">
                        <h1 className="cs-titolo-sinistro mb-4">Chi sono? 🙂</h1>
                        
                        <div className="cs-foto-box mb-4">
                            <img 
                                src={fotoProfilo} 
                                alt="Foto di Alexandra" 
                                className="cs-foto" 
                            />
                        </div>
                        
                        <div className="cs-testo">
                            <p className="mb-3">
                                <strong>Junior Frontend Developer</strong> con competenze full-stack, specializzata nella creazione di interfacce web moderne, veloci e facili da usare per l'utente finale. 🦋
                            </p>
                            <p>
                                <strong>Competenze:</strong> Sviluppo di componenti riutilizzabili con React.js e JavaScript, gestione dinamica dei dati, layout responsive con Bootstrap e grafici interattivi con Recharts. 👩🏻‍💻
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 px-4">
                        
                        <div>
                            <h1 className="cs-titolo-destro mb-4">Istruzione e formazione 👩🏻‍💻</h1>
                            <h2 className="cs-sottotitolo-master mb-1">Master Full Stack Developer 📚</h2>
                            <p className="cs-testo-epicode fw-bold mb-3">EPICODE Institute of Technology (set 2025 - apr 2026)</p>
                            
                            <p className="cs-testo">
                                Percorso intensivo focalizzato sullo sviluppo web, con particolare attenzione al lato client-side. Il programma ha previsto lo studio pratico e la progettazione di interfacce web moderne, dinamiche e responsive, affrontando sfide logiche e implementando soluzioni software complete.
                            </p>
                        </div>

                        <div className="cs-spaziatore-valore">
                            <p className="cs-testo">
                                <strong>Il mio valore aggiunto:</strong> Grazie alle competenze di backend (Java/Spring Boot), so come far comunicare l'interfaccia visiva con il database, garantendo un'applicazione fluida, completa e funzionante in ogni suo aspetto. ✨
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ChiSono;