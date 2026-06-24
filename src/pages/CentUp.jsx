import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftShort } from "react-bootstrap-icons";
import "../style/centup.css";
import fotoMockup from "../assets/HomeCentUp.jpeg";
import imgSpesa from "../assets/spesa.jpeg";
import imgFreccia from "../assets/freccia.jpeg";
import imgSalvadanaio from "../assets/salvadanaio.jpeg"; 
import imgGestioneObiettivi from "../assets/GestioneObiettivi.jpeg";
import imgDonazioni from "../assets/Donazioni.jpeg";
import imgAccedi from "../assets/Accedi.jpeg";
import imgBootstrap from "../assets/bootstrap.jpeg";
import imgJavaTech from "../assets/java.jpeg";
import imgPostare from "../assets/postgre.jpeg";

function CentUp() {
    return (
        <section className="sectionCentUp w-100">
            <Link to="/progetti" className="back-arrow" title="Torna ai Progetti">
                <ArrowLeftShort size={32} />
            </Link>

            <div className="container text-center centup-wrapper">
                <h1 className="centup-titolo mb-3">
                    Cosa fa l'app e perché esiste 🤓
                </h1>
                
                <p className="centup-descrizione mb-4">
                    CentUp serve a unire il risparmio personale e la beneficenza in un unico posto, rendendo facile mettere da parte i soldi e donarli con un click. ✨
                </p>
                
                <div className="centup-mockup-box mb-5 pb-5">
                    <img 
                        src={fotoMockup} 
                        alt="Interfaccia Dashboard CentUp" 
                        className="centup-img" 
                    />
                </div>
                <div className="centup-funzionamento mb-5 pb-5 border-bottom-divisore">
                    <h2 className="centup-titolo mb-5">Come funziona? 🧩</h2>
                    
                    <div className="row align-items-center justify-content-center text-start grid-funzionamento">
                        <div className="col-lg-4 col-md-12 d-flex flex-column align-items-center mb-5 text-column">
                            <p className="funzionamento-testo">
                                <strong>1. Fai la tua normale spesa.</strong> Ogni volta che usi la carta per i tuoi acquisti di tutti i giorni, l'applicazione entra in azione. Ad esempio, se paghi una spesa di 1,20€, CentUp <strong>arrotonda</strong> la cifra all'euro successivo (2,00€). 💵
                            </p>
                            <img src={imgSpesa} alt="Illustrazione Spesa" className="img-spesa mt-3" />
                        </div>

                        <div className="col-lg-3 col-md-12 d-flex flex-column align-items-center mb-5 freccia-column text-center">
                            <img src={imgFreccia} alt="Freccia di raccordo" className="img-freccia mb-2" />
                            <span className="calcolo-testo">1,20€ = +0,80€</span>
                        </div>

                        <div className="col-lg-4 col-md-12 d-flex flex-column align-items-center mb-5 text-column">
                            <p className="funzionamento-testo">
                                <strong>2. Accumula nel tuo salvadanaio</strong> La <strong>differenza</strong> di 0,80€ non viene persa, ma viene messa automaticamente da parte nel tuo salvadanaio digitale all'interno dell'app. Spesa dopo spesa, i centesimi crescono insieme ai tuoi obiettivi di risparmio. 🥇
                            </p>
                            <div className="d-flex flex-column align-items-center mt-3">
                                <img src={imgSalvadanaio} alt="Icona Salvadanaio CentUp" className="img-salvadanaio" />
                                <h3 className="brand-titolo mt-2">CentUp</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="centup-obiettivi mb-5 pb-5 border-bottom-divisore text-start pt-4">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <img 
                                src={imgGestioneObiettivi} 
                                alt="Interfaccia di gestione degli obiettivi" 
                                className="img-gestione-obiettivi shadow-lg img-fluid" 
                            />
                        </div>

                        <div className="col-12 col-lg-6 px-4">
                            <h2 className="centup-titolo mb-4 text-center text-lg-start">Gestione degli obiettivi 🏹</h2>
                            
                            <p className="funzionamento-testo mb-3">
                                L'utente stabilisce un obiettivo di risparmio da raggiungere, inserendo l'importo desiderato e assegnandogli un nome personalizzato (come ad esempio "nuovo PC").
                            </p>
                            
                            <p className="funzionamento-testo mb-4">
                                Il grafico a cerchio mostra in modo semplice e visivo l'avanzamento dei risparmi ad ogni transazione: ogni volta che si mette da parte del denaro, la barra si riempie in tempo reale fino al completamento del traguardo.
                            </p>

                            <div className="obiettivi-tech-box p-4 rounded">
                                <div className="d-flex align-items-start mb-3">
                                    <span className="fs-4 me-3">⚛️</span>
                                    <p className="tech-box-testo m-0">
                                        <strong>React: Calcolo % in tempo reale:</strong> Visualizzazione dell'avanzamento in tempo reale tramite un calcolo percentuale dinamico. Gestione automatica del limite massimo (100%) per evitare errori grafici nell'interfaccia.
                                    </p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="fs-4 me-3">☕</span>
                                    <p className="tech-box-testo m-0">
                                        <strong>Java: Logica di calcolo</strong> Il sistema identifica automaticamente gli arrotondamenti degli acquisti.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="centup-donazioni mb-5 pb-5 border-bottom-divisore text-start pt-4">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <img 
                                src={imgDonazioni} 
                                alt="Interfaccia di selezione ente per donazione" 
                                className="img-donazioni shadow-lg img-fluid" 
                            />
                        </div>

                        <div className="col-12 col-lg-6 px-4">
                            <h2 className="centup-titolo mb-4 text-center text-lg-start">Donazioni con un click 💜</h2>
                            
                            <p className="funzionamento-testo mb-3">
                                Invece di gestire bonifici manuali o procedure complicate, l'utente può scegliere in ogni momento di svuotare il proprio salvadanaio digitale.
                            </p>
                            
                            <p className="funzionamento-testo mb-4">
                                Con un simple tocco sulla lista degli enti disponibili, i risparmi accumulati vengono inviati istantaneamente all'organizzazione scelta. Questo sistema trasforma i piccoli centesimi messi da parte in un aiuto concreto, immediato e sicuro per le cause che stanno più a cuore all'utente.
                            </p>

                            <div className="obiettivi-tech-box p-4 rounded">
                                <div className="d-flex align-items-start mb-3">
                                    <span className="fs-4 me-3">⚛️</span>
                                    <p className="tech-box-testo m-0">
                                        <strong>React: Selezione e invio dinamico:</strong> Gestione dello stato per mostrare la lista degli enti benefici caricati dal database. Invio dell'ordine di donazione tramite una funzione che comunica l'ID dell'ente e l'importo totale da trasferire.
                                    </p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="fs-4 me-3">☕</span>
                                    <p className="tech-box-testo m-0">
                                        <strong>Java: Gestione della transazione benefica:</strong> Esecuzione di una procedura sicura che azzera il saldo del salvadanaio dell'utente e registra contemporaneamente un movimento di uscita verso l'ente selezionato, garantendo la tracciabilità dell'operazione.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="centup-accedi mb-5 pb-5 border-bottom-divisore text-start pt-4">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <img 
                                src={imgAccedi} 
                                alt="Interfaccia di accesso sicuro CentUp" 
                                className="img-accedi shadow-lg img-fluid" 
                            />
                        </div>

                        <div className="col-12 col-lg-6 px-4">
                            <h2 className="centup-titolo mb-4 text-center text-lg-start">Struttura semplice e sicuro ⛓️</h2>
                            
                            <p className="funzionamento-testo mb-3">
                                L'ingresso nell'area personale è semplice ma protetto da una blindatura digitale. Quando inserisci email e password, i dati vengono convertiti all'istante in un codice segreto.
                            </p>
                            
                            <p className="funzionamento-testo mb-4">
                                Questo garantisce la massima privacy per i tuoi risparmi, impedendo a chiunque altro di accedere al tuo salvadanaio.
                            </p>

                            <div className="obiettivi-tech-box p-4 rounded">
                                <div className="d-flex align-items-start mb-3">
                                    <span className="fs-4 me-3">⚛️</span>
                                    <p className="tech-box-testo m-0">
                                        <strong>React: Protezione dati in uscita:</strong> Gestione sicura dei moduli di input e invio crittografato delle credenziali verso il server per evitare intercettazioni.
                                    </p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <span className="fs-4 me-3">☕</span>
                                    <p className="tech-box-testo m-0">
                                        <strong>Java: Blindatura con Spring Security:</strong> Utilizzo dell'algoritmo BCrypt: le password non vengono mai salvate in chiaro nel database, ma memorizzate in una version criptata e indecifrabile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="centup-tecnologie text-center pt-5">
                    <h2 className="centup-titolo mb-5">Le tecnologie utilizzate 💻</h2>
                    
                    <div className="row justify-content-center text-start px-2">
                        
                        {/* Colonna Frontend */}
                        <div className="col-12 col-md-4 mb-5 d-flex flex-column justify-content-between px-4 tech-col">
                            <div>
                                <h3 className="tech-categoria-titolo mb-2">Frontend 🦋</h3>
                                <h4 className="tech-lista-titolo mb-3">React.js, JavaScript, Bootstrap e CSS Modules.</h4>
                                <p className="tech-descrizione-testo">
                                    Gestisce l'interfaccia utente dinamica e responsive. Include componenti riutilizzabili per le carte di credito, i salvadanai e grafici interattivi con Recharts per mostrare i progressi del risparmio.
                                </p>
                            </div>
                            <div className="text-center mt-3">
                                <img src={imgBootstrap} alt="Logo Frontend" className="img-tech-logos" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-5 d-flex flex-column justify-content-between px-4 tech-col tech-border-l">
                            <div>
                                <h3 className="tech-categoria-titolo mb-2">Backend 🐝</h3>
                                <h4 className="tech-lista-titolo mb-3">Java 17 e Spring Boot.</h4>
                                <p className="tech-descrizione-testo">
                                    Gestisce le API REST, l'architettura a livelli (Controller, Service, Repository) e i processi transazionali complessi, come il calcolo degli obiettivi e i flussi di donazione.
                                </p>
                            </div>
                            <div className="text-center mt-3">
                                <img src={imgJavaTech} alt="Logo Backend" className="img-tech-logos" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-5 d-flex flex-column justify-content-between px-4 tech-col tech-border-l">
                            <div>
                                <h3 className="tech-categoria-titolo mb-2">Dati e sicurezza 🌝</h3>
                                <h4 className="tech-lista-titolo mb-3">PostgreSQL, Spring Security e BCrypt.</h4>
                                <p className="tech-descrizione-testo">
                                    Garantisce l'integrità dei dati finanziari e la protezione degli utenti. Salva le informazioni nel database relazionale e cripta in sicurezza le password tramite l'algoritmo di hashing BCrypt.
                                </p>
                            </div>
                            <div className="text-center mt-3">
                                <img src={imgPostare} alt="Logo Database e Sicurezza" className="img-tech-logos" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default CentUp;