import "./Home.css";
import truck from "../truck.png";


export default function Home(){
    return(
        <div className="block1">
            <div className="title-stats">
                <h2>Englishtown Manalapan</h2>
                <h1>First Aid Squad</h1>
                <div className="stats">

                <table className="stats-table">
                    <tr>
                        <td>Avg Response Time</td>
                        <td>Total Calls Taken</td>
                        <td>Miles Driven</td>
                    </tr>
                    <tr>
                        <th>-- min</th>
                        <th>-- calls</th>
                        <th>-- miles</th>
                    </tr>
                </table>
            
                </div>
                
            </div>
            <div className= "truck-img">
                <img src={truck} className="truck"/> 
            </div>
        </div>


    );

}