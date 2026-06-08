import React from "react";
import homeImage from '../assets/Home.jpeg';
import '../style/dashboardstyle.css';
function Dashboard() {
    return (
        <section className="dashboard-section">
            <div className="dash-container">
                <img src={homeImage} alt="immagine di sfondo della dashboard" className="dash-img" />

            </div>
        </section>
    );
}

export default Dashboard;