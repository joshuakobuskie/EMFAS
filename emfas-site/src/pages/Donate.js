import "../styles/Donate.css";

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
                        <a href="https://www.paypal.com/donate/?hosted_button_id=7HT85HQVJCXAQ"><img src={require("../images/paypal_btn.png")} alt="Paypal"></img></a>
                        <a href="https://www.paypal.com/donate/?hosted_button_id=7HT85HQVJCXAQ"><img src={require("../images/paypal_code.png")} alt="Paypal"></img></a>
                    </div>
                        
                </div>
            
            </div>
            <div className="contact-vp">
                <h3>For more information, email our vice president at <a href="mailto:Vice.President@emfas.org">Vice.President@emfas.org</a></h3>

            </div>
            

        </div>
       

    );

}