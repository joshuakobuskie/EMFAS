import "../styles/Officers.css";
import flag_truck from "../images/truck_with_flag.png";


import React, { useState, useEffect } from 'react'


export default function Officers(){
    const [officer, initOfficer] = useState([])
    const fetchData = async () => {
    const response = await fetch('https://emfas.org/getOfficers.php'
)
    if (!response.ok) { console.log(response);
        throw new Error('Data coud not be fetched!')
    } else {
        return await response.json()
    }
    }
    useEffect(() => {
    fetchData()
        .then((res) => {
        initOfficer(res)
        })
        .catch((e) => {
        console.log(e.message)
        })
    }, [])

    if(officer.length > 0){
        return(
            <div className="officers-pg">
                <div className="off-title">
                    <h1>Officers</h1>
                </div>
                <div className= "officers">
                    <table className="officer-table">
                        <tbody>
    
                            {officer.map((officer,i)=>
                                <tr key={i}>
                                    <th>{officer.Position}</th>
                                    <td>{officer.Name}</td>
                                    <td>
                                        <a href={'mailto:' + officer.Email}>{officer.Email}</a>
                                        {officer.Phone}
                                    </td>
                                </tr>
                            
                            )}
                        </tbody>
                    
                    
                    </table>
    
                    <img src={flag_truck} className="flag-truck"></img>
                    
                </div>
            
            </div>
        )

    }
    else{
        return(
            <div className="officers-pg">
                <div className="off-title">
                    <h1>Officers</h1>
                </div>
                <div className= "officers">
                    <table className="officer-table">
                        <tbody>
    

                                <tr >
                                    <th>---</th>
                                    <td>---</td>
                                    <td>
                                       ---
                                    </td>
                                </tr>
                            
                        
                        </tbody>
                    
                    
                    </table>
    
                    <img src={flag_truck} className="flag-truck"></img>
                    
                </div>
            
            </div>
        )
    }
  

}


