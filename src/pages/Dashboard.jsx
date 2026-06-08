import React from "react";
import homeImage from '../assets/Home.svg';
import '../style/dashboardstyle.css';

function Dashboard() {
    return (
        <section className="dashboard-section position-relative w-100 m-0 p-0">
            <div className="dash-container">
                  
            
                <img src={homeImage} alt="immagine di sfondo della dashboard" className="dash-img" />
                
                <a href="#progetti" className="card-base primaDashCard d-flex justify-content-center align-items-center rounded-3 border-0 text-decoration-none text-white fw-medium text-center px-2">
                    I miei progetti 📚
                </a>

                <a href="#chisono" className="card-base secondaDashCard d-flex justify-content-center align-items-center rounded-3 border-0 text-decoration-none text-white fw-medium text-center px-2">
                    Chi sono 👩🏻‍💻
                </a>

                <a href="#contatti" className="card-base terzaDashCard d-flex justify-content-center align-items-center rounded-3 border-0 text-decoration-none text-white fw-medium text-center px-2">
                    Contatti 🌸
                </a>

            </div>
        </section>
    );
}

export default Dashboard;