import "./Officers.css";
import flag_truck from "../truck_with_flag.png";


export default function Officers(){
    return(
        <div className="officers-pg">
            <h1>Officers</h1>
         <table className="officer-table">
                        <tr>
                            <th>Chief</th>
                            <td>Tracie Cuccia</td>
                            <td>
                                <a href="mailto:Chief@emfas.org">Chief@emfas.org</a>
                                732-850-6490
                            </td>
                        </tr>

                        <tr>
                            <th>Captain</th>
                            <td>Zachery McCarthy</td>
                            <td><a href="mailto:Captain@emfas.org">Captain@emfas.org</a></td>
                        </tr>

                        <tr>
                            <th>Lieutenant</th>
                            <td>Gianna Hossain</td>
                            <td>
                                <a href="mailto:Lieutenant@emfas.org">Lieutenant@emfas.org</a>
                                732-850-6488
                            </td>
                        </tr>

                        <tr>
                            <th>Sergeant</th>
                            <td>Paul Dolgin</td>
                            <td>
                                <a href="mailto:Sgt@emfas.org">Sgt@emfas.org</a>
                
                            </td>
                        </tr>

                        <tr>
                            <th>President</th>
                            <td>John J. Cuccia Jr.</td>
                            <td>
                                <a href="mailto:President@emfas.org">President@emfas.org</a>
                                732-850-6486
                            </td>
                        </tr>

                        <tr>
                            <th>Vice President</th>
                            <td>Richard Thompson</td>
                            <td>
                                <a href="mailto:Vice.President@emfas.org">Vice.President@emfas.org</a>
                            </td>
                        </tr>

                        
                        <tr>
                            <th>Executive Secretary</th>
                            <td>Joshua Cuccia</td>
                            <td>
                                <a href="mailto:Secretary@emfas.org">Secretary@emfas.org</a>
                            </td>
                        </tr>

                        
                        <tr>
                            <th>Membership Secretary</th>
                            <td>Alyssa Lezamiz</td>
                            <td>
                                <a href="mailto:Membership.Secretary@emfas.org">Membership.Secretary@emfas.org</a>
                            </td>
                        </tr>
                        
                        
                        
                        <tr>
                            <th>Treasurer</th>
                            <td>Jeff Kravitz</td>
                            <td>
                                <a href="mailto:Treasurer@emfas.org">Treasurer@emfas.org</a>
                            </td>
                        </tr>
                       
                        
                    </table>

                    <img src={flag_truck} className="flag-truck"></img>

                    
               


        </div>
       
    
    
    )

}


