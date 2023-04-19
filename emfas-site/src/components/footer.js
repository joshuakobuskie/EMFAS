import '../styles/footer.css';
import {Link} from "react-router-dom";

export default function  Footer(){
    return (
        <div className="footer">
                <div className="foot-links">
                    <ul>
                        <Link to="/njitDev"> Home</Link>
                        <Link to="/Donate"> Donate</Link>
                        <Link to="/Join">Join Us</Link>
                        <Link to="/Officers"> Officers</Link>
                    </ul>
                   
                
                </div>

                <div className="contact">
                    <ul>
                        <p>7 Sanford St</p>
                        <p>Manalapan Township, NJ 07726</p>
                        <p>membership@emfas.org</p>
                        <p>(732) 850-6488</p>
                    </ul>
                   
                </div>
          
            
        </div>
       

    );

};