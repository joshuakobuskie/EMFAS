
import "../styles/edit_map.css"
import {Link} from "react-router-dom"


export default function EditMap(){

   
    
    return(
        <div className="edit-links-pg">  
            <div className="edit-title">
                <h1>Edit Forms</h1>
            </div>
            <div className="edit-routes">
                <ul>
                    <li>
                        <Link to="/EditHome"> Edit Home</Link>
                    </li>
                    <li>
                        <Link to="/EditDonate"> Edit Donate</Link>
                    </li>
                    <li>
                        <Link to="/EditJoin"> Edit Join</Link>
                    </li>
                    <li>
                        <Link to="/EditOfficers"> Edit Officers</Link>
                    </li>
                  
                </ul>
            </div>
    
        </div>   
        
        )

   

};


