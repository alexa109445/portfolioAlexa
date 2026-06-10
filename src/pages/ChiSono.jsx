import { Link } from "react-router-dom";
import React from "react";
import { ArrowLeftShort } from "react-bootstrap-icons";
import "../style/chiSono.css"
function ChiSono(){
    return(
    
            <section className="sectionChiSono">
            <Link to="/" className="back-arrow" title="Torna alla Dashboard">
                <ArrowLeftShort size={32} />
            </Link>
            
        <h1>Chi sono</h1>
        </section>
    )
}
export default ChiSono;