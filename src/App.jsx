import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Home from './components/Home.jsx';
import Progetti from './pages/Progetti.jsx';
import ChiSono from './pages/ChiSono.jsx';
import Contatti from './pages/Contatti.jsx';
import CentUp from './pages/CentUp.jsx'; 
import Meteo from './pages/Meteo.jsx';
import GestioneEventi from './pages/GestioneEventi.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <Dashboard />
          </div>
        } />
        
        <Route path="/progetti" element={<Progetti />} />
        <Route path="/centup" element={<CentUp />} /> 
        <Route path="/appMeteo" element={<Meteo/>} />
        <Route path="/gestioneEventi" element={<GestioneEventi/>}/>
        <Route path="/chisono" element={<ChiSono/>}/>
        <Route path="/contatti" element={<Contatti/>}/>

      </Routes>
    </Router>
  );
}

export default App;