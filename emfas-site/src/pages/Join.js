import Accordion from "../components/accordion";
import Join_form  from "../components/join_form";
import JoinCSS from "./Join.css"






export default function Join(){
    return(
     <div className="join-container">  
        <div className={JoinCSS.join_title}>
            <h1>Join Us!</h1>
        </div>
            <div className={JoinCSS.join_info}>           
                <Accordion></Accordion>                   
            </div>
            <div className={JoinCSS.join_form}>           
                <Join_form></Join_form>    
            </div>
                 
        
    </div>   
       
    )

};