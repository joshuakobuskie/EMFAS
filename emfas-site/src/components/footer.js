import './footer.css';
import {Link} from "react-router-dom";

export default function  Footer(){
    return (
        <div className="footer">
                <div className="foot-links">
                    <ul>
                        <Link to="/"> Home</Link>
                        <Link to="/Donate"> Donate</Link>
                        <Link to="/Join">Join Us</Link>
                        <Link to="/Officers"> Officers</Link>
                    </ul>
                   
                
                </div>

                <div className="contact">
                    <ul>
                        <h4>Contact Us</h4>
                        <p>11 Street, Manalapan</p>
                        <p>email@email.com</p>
                        <p>20177711111</p>
                    </ul>
                   
                </div>
          
            
        </div>
       

    );

};