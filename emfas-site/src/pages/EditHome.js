import "../styles/edit_home.css";
import { useState, useEffect } from 'react';
import $, { post } from "jquery";


export default function Edit_Home(){

    const [homeData, setData] = useState([])
    const [orig_Data, saveOrig] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch('https://emfas.org/getOfficers.php')
        if (!response.ok) { console.log(response);
            throw new Error('Data could not be fetched!')
        } else {
            return await response.json()
        }
    }
    useEffect(() => {
        fetchData()
            .then((res) => {
                saveOrig(res);
            })
            .catch((e) => {
            })
        
        }, [])
    
    useEffect(() => {
    fetchData()
        .then((res) => {
        setData(res);
        })
        .catch((e) => {
        
        })
    
    }, [])

    const handleFormChange = (e, i) => {
        let data = [...homeData];
        data[i][e.target.name] = e.target.value;
    }
    const submit = (e) => {
        e.preventDefault();    
        let data;
        let update_cnt = 0;
        let err_cnt = 0;
        let passwd = document.getElementById("Pass");
       

        homeData.map((homeData,i)=> {
           
            data = {
                Priority: homeData.Priority,
                Block: homeData.Name,
                CurBlock: orig_Data[i].Name,
                CurPriority: orig_Data[i].Priority
            }
            if(data.CurPriority != data.Priority || data.CurBlock != data.Block){
                                    
                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/updateOfficers.php',
                    data: data,
                    async:false,
                    success(data){
                        if(data == '"Invalid Credentials"'){
                            err_cnt+=1;
                        }
                        else{
                            update_cnt+=1;
                            //console.log("Homepage Updated");
                        }
                    },
                    error(err) {
                        alert("Something went wrong. Please try again.");
                    }
        
                });
            }
            
        });  //end loop through homedata json

        if(err_cnt > 0){
            alert("Something went wrong. Please try again!")
        }
        if(update_cnt > 0){
            alert("Home Page Updated");
            window.location.reload();
        }
     };


    return(
        <div className="home-form">
            
              <h1>Edit Home</h1>
            <ul>
                <form onSubmit = {e => submit(e)} >
                    {homeData.map((homeData,i)=>
                    
                    <li id={i} key={i}>
                        
                        <label htmlFor="Priority">Order:</label>
                        <input required min="0" type="number" id={"Priority-" + i} className="Priority" name="Priority" defaultValue={homeData.Priority}  onChange={e => handleFormChange(e, i)}></input> 
                        <label htmlFor="block">Block{i+1}:</label>
                        <textarea type="text" id={"block" + i} name="block" className="block" defaultValue={homeData.Position}  onChange={e => handleFormChange(e, i)} ></textarea>
                    
                    </li> 
                    
                    )}
                
                    <li> 
                        <label htmlFor="Pass">Password</label>
                        <input required type="password" id="Pass" name="Pass" ></input>
                        <button id="submit-btn" type="submit">Submit</button>
                    </li>
                  
                
                    
                </form>

            </ul>
        
        </div>
    );

       
}

