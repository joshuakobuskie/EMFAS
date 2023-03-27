import "./Donate.css";
import paypal_img from "../paypal_code.png";
import {Link} from "react-router-dom"


export default function Donate(){
    return(
        <div className="donate-pg"> 
        
        <h1>Donate</h1>
        <div className="Donate">
            
            <div className="contact-info">
                <div className="Address">
                    <h3>Send Your Donations to:</h3>
                    
                        <p>
                         Englishtown - Manalapan First Aid Squad
                        </p>
                        <p>
                            P.O. Box 294  
                        </p>
                        <p>
                            Manalapan, NJ 07726
                        </p>
                    
                </div>
            </div>

            <div className="or">
                <h3>or</h3>
            </div>

            <div className="paypal">
                <div className="img">
                    <h3>Donate Here</h3>
                    <a href="https://www.paypal.com/us/home"><img src={paypal_img}></img></a>
                </div>
                    
            </div>

        </div>

        </div>
       

    );

}