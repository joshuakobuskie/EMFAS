import Accordion from "../components/accordion";
import JoinForm  from "../components/join_form";
import "./Join.css"


export default function Join(){
    return(
     <div className="join-container">  
        <div className="join-title">
            <h1>Join The Squad</h1>
        </div>
        <div className="join-content">
             <div className="join-info">           
                <Accordion></Accordion>                   
            </div>
            <div className="join-form">           
                <JoinForm></JoinForm>    
            </div>
        </div>
           
                 
        
    </div>   
       
    )

};