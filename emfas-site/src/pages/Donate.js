import "../styles/Donate.css";
import Footer from '../components/footer';
import { useState, useEffect} from 'react';

export default function Donate(){

    const [donateData, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://emfas.org/getDonate.php')
        if (!response.ok) { console.log(response);
            throw new Error('Data coud not be fetched!')
        } else {
            return await response.json()
        }

    }

    useEffect(() => {
        //prevOfficer.current = officer;
        fetchData()
            .then((res) => {
                setData(res);
            })
            .catch((e) => {
            })
        
        }, [])

   
    if(donateData.length > 0){
        console.log(donateData);
    
        return(
            <div className="donate-pg"> 
                
                <h1>Donate</h1>
                <div className="Donate">
                    
                    <div className="contact-info">
                        <div className="Address">
                            <h3>{donateData[0].Title}</h3>
                            
                                <p>
                                {donateData[0].Content}
                                </p>
                                {/*<p>
                                    P.O. Box 294  
                                </p>
                                <p>
                                    Manalapan, NJ 07726
                                </p>*/
                                }
                                
                            
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
                    <h3>{donateData[1].Title} <a href={"mailto:"+ donateData[1].Content}>email</a></h3>
                </div>
                <Footer className="foot" />

            </div>
        

        );
    }
    else{
        return(
            <div className="donate-pg"> 
                <h1>Donate</h1>
            </div>

        )
    }


}