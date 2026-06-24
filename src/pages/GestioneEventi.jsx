import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftShort, Github } from 'react-bootstrap-icons';
import '../style/gestioneeventi.css';

function GestioneEventi() {
  return (
    <div className="portfolio-eventi-container">
      <Link to="/progetti" className="back-arrow-fixed" title="Torna ai Progetti">
        <ArrowLeftShort size={40} />
      </Link>

      <div className="eventi-content-wrapper">
        
        <div className="eventi-top-section">
          <div className="github-link-card">
            <h3 className="github-card-title">Codice Sorgente del Progetto 🧩</h3>
            <p className="github-card-text">
              Trattandosi di un'applicazione puramente backend incentrata sulle API REST e sulla sicurezza, 
              puoi visionare l'intera struttura delle classi, dei modelli e delle configurazioni direttamente su GitHub.
            </p>
            <a 
              href="https://github.com/alexa109445/GestioneEventi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-project-btn"
            >
              <Github size={24} className="me-2" />
              Vedi il codice su GitHub
            </a>
          </div>
        </div>

        <div className="eventi-bottom-section">
          <div className="eventi-header-title">
            <h2>Gestione ed Organizzazione Eventi 🎫</h2>
          </div>

          <div className="eventi-description-text">
            <p>
              Questa applicazione backend gestisce in modo completo la creazione di eventi e il sistema di prenotazione dei posti. 
              La piattaforma distingue automaticamente gli utenti in base al loro profilo: gli Organizzatori possono creare, 
              modificare o cancellare gli eventi, mentre gli Utenti Normali possono scorrere la lista delle attività disponibili 
              e riservare il proprio biglietto digitale in un click.
            </p>
            <p>
              Il sistema controlla automaticamente la disponibilità dei posti in tempo reale, impedendo sovrapposizioni o 
              prenotazioni in eccesso, garantendo una gestione fluida e sicura delle adesioni.
            </p>
          </div>

          <div className="eventi-technical-box">
            <div className="eventi-tech-section">
              <h3>☕ Java & Spring Boot: Modello Relazionale e Controller</h3>
              <p>
                Architettura a livelli basata su relazioni Many-to-One tra Utenti, Eventi e Prenotazioni. I dati vengono scambiati 
                in modo sicuro tramite oggetti DTO, esponendo endpoint REST puliti per la registrazione, la gestione dei palinsesti 
                e la riserva dei posti.
              </p>
              <pre className="eventi-code-box">
{`@PostMapping("/crea")
public ResponseEntity<Prenotazione> creaPrenotazione(@RequestBody PrenotazioneDTO dto) {
    Prenotazione nuovaPrenotazione = prenotazioneService.riservaPosto(dto);
    return new ResponseEntity<>(nuovaPrenotazione, HttpStatus.CREATED);
}`}
              </pre>
            </div>

            <div className="eventi-tech-section">
              <h3>🛡️ Spring Security: Hashing e Controllo Accessi</h3>
              <p>
                Predisposizione della sicurezza tramite l'algoritmo BCryptPasswordEncoder per l'oscuramento delle password nel 
                database relazionale. La struttura è configurata con la disattivazione del CSRF per API stateless e definisce 
                i ruoli attraverso un Enum dedicato (UTENTE_NORMALE, ORGANIZZATORE).
              </p>
              <pre className="eventi-code-box">
{`@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}`}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GestioneEventi;