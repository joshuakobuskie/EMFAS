import Accordion from "../components/accordion";
import Join_form  from "../components/join_form";
import JoinCSS from "./Join.css"






export default function Join(){
    return(
     <div className="join-container">  
        <div className="join-title">
            <h1>Join Us!</h1>
        </div>
        <div className="join-content">
             <div className="join-info">           
                <Accordion></Accordion>                   
            </div>
            <div className="join-form">           
                <Join_form></Join_form>    
            </div>
        </div>
           
                 
        
    </div>   
       
    )

};