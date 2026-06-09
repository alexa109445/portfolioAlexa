import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Home from './components/Home.jsx';
import Progetti from './pages/Progetti.jsx';

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
      </Routes>
    </Router>
  );
}

export default App;