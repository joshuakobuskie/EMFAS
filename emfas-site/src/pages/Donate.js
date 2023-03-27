import "./Donate.css";
import paypal_img from "../paypal_code.png";


export default function Donate(){
    return(
        <> 
        
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
               
                
                <div className="donate">
                    <h3>Donate Here</h3>
                </div>
                
               

                <div className="img">
                    <img src={paypal_img}></img>
                </div>
                    
            </div>

        </div>

        </>
       

    );

}