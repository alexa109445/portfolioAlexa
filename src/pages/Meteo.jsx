import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftShort, Github } from 'react-bootstrap-icons';
import '../style/meteo.css';
import '../style/meteo.css';
import meteoGif from '../assets/meteo.gif'; 

function Meteo() {
  return (
    <div className="portfolio-slide-container">
      <Link to="/progetti" className="back-arrow-fixed" title="Torna ai Progetti">
        <ArrowLeftShort size={40} />
      </Link>

      <div className="slide-content-wrapper">
        
        <div className="slide-top-section">
         <img 
  src={meteoGif} 
  alt="Anteprima App Meteo" 
  className="app-gif-preview" 
/>
        </div>

        <div className="github-link-section">
          <a 
            href="https://github.com/alexa109445/ApplicazioneMeteo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-meteo-btn"
          >
            <Github size={22} className="me-2" />
            Vedi il codice su GitHub
          </a>
        </div>

        <div className="slide-bottom-section">
          <div className="slide-header-title">
            <h2>Ricerca Meteo in Tempo Reale ☀️</h2>
          </div>

          <div className="slide-description-text">
            <p>
              Questa schermata permette all'utente di consultare istantaneamente la situazione meteo di qualsiasi località. 
              È possibile digitare il nome di una città nell'apposito spazio oppure utilizzare i comodi pulsanti rapidi 
              per le città principali (come Roma, Milano e Napoli).
            </p>
            <p>
              Una volta premuto il pulsante, l'applicazione si collega immediatamente ai sistemi meteo globali per mostrare 
              le temperature attuali e le previsioni dettagliate per i giorni successivi.
            </p>
          </div>

          <div className="technical-details-box">
            <div className="tech-section">
              <h3>⚛️ React: Navigazione e Stato Dinamico</h3>
              <p>
                Gestione dello stato dell'input testuale tramite useState e reindirizzamento immediato alla pagina dei 
                dettagli usando useNavigate. I dati meteo recuperati vengono passati direttamente alla nuova schermata 
                senza ricaricare la pagina.
              </p>
              <pre className="code-snippet-box">
{`const gestisciSubmit = async (e) => {
  e.preventDefault();
  if (!citta) return;

  const datiMeteo = await ottenereMeteoPerCitta(citta);
  if (datiMeteo) {
    navigate(\`/dettagli-meteo/\${citta}\`, { state: { datiMeteo } });
  }
};`}
              </pre>
            </div>

            <div className="tech-section">
              <h3>☕ JavaScript: Integrazione API Asincrona</h3>
              <p>
                Utilizzo di funzioni asincrone (async/await) e del comando fetch per comunicare in tempo reale con l'API 
                esterna di OpenWeatherMap, scaricando le informazioni in formato JSON e gestendo eventuali errori di digitazione.
              </p>
              <pre className="code-snippet-box">
{`const ottenereMeteoPerCitta = async (citta) => {
  try {
    const risposta = await fetch(
      \`\${BASE_URL}weather?q=\${citta}&appid=\${API_KEY}&units=metric&lang=it\`
    );
    if (!risposta.ok) throw new Error('Città non trovata');
    return await risposta.json();
  } catch (errore) {
    return null;
  }
};`}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Meteo;