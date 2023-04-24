import Accordion from "../components/accordion";
import JoinForm  from "../components/join_form";
import "../styles/Join.css"
import { useState, useEffect} from 'react';


export default function Join(){

    const [joinData, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://emfas.org/getJoin.php')
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
        //console.log(joinData);
    if(joinData.length > 0){

        
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
    }
    else{
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

    }

};