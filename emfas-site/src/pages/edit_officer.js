import "./edit_officer.css";
import { useState, useEffect } from 'react';


export default function Edit_Officer(){

    const [officer, initOfficer] = useState([])
    const fetchData = async () => {
    const response = await fetch('http://emfas.org/njitDev/getOfficers.php'
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

    return(
        <div className="officers-form">
          
            {officer.map((officer,i)=>
                <div>{officer.Name}</div>



            )}
                       
                


        
        </div>
    );

       
}



