import React from "react";
import { Link } from "react-router-dom";
import homeImage from '../assets/Home.svg';
import '../style/dashboardstyle.css';

function Dashboard() {
    return (
        <section className="dashboard-section">
            <div className="dash-container">
                  
                <img src={homeImage} alt="immagine di sfondo della dashboard" className="dash-img" />
                
                <div className="dash-content">
                    <Link to="/progetti" className="card-base dash-card btn-progetti border-0 text-decoration-none fw-medium text-center px-2">
                        I miei progetti 📚
                    </Link>

                     <Link to="/chisono" className="card-base dash-card btn-chisono border-0 text-decoration-none fw-medium text-center px-2">
                        Chi sono 👩🏻‍💻
                    </Link>

              <Link to="/contatti" className="card-base dash-card btn-contatti border-0 text-decoration-none fw-medium text-center px-2">
                         Contatti 🌸
                    </Link>
                       
                
                </div>

            </div>
        </section>
    );
}

export default Dashboard;