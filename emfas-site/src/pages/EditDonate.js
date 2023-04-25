import "../styles/edit_donate.css";
import { useState, useEffect } from 'react';
import $, { post } from "jquery";


export default function Edit_Donate(){

    const [donateData, setData] = useState([])
    const [orig_Data, saveOrig] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch('https://emfas.org/getDonate.php')
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
        let data = [...donateData];
        data[i][e.target.name] = e.target.value;
    }
    const submit = (e) => {
        e.preventDefault();    
        let data;
        let update_cnt = 0;
        let err_cnt = 0;
        let passwd = document.getElementById("Pass");
       

        donateData.map((donateData,i)=> {
           
            data = {
                NewTitle: donateData.Title,
                NewContent: donateData.Content,
                OldContent: orig_Data[i].Content,
                OldTitle: orig_Data[i].Title,
                Pass: passwd.value,
                NewPriority: orig_Data[i].Priority
            }
            if(data.OldContent != data.NewContent|| data.NewTitle != data.OldTitle){
                         
                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/updateDonate.php',
                    data: data,
                    async:false,
                    success(data){
                        if(data == '"Invalid Credentials"'){
                            err_cnt+=1;
                        }
                        else{
                            update_cnt+=1;
                            //console.log("Homepage Data Updated");
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
            alert("Donate Page Updated");
            window.location.reload();
        }
     };

    
    if(donateData.length > 0){

    
    return(
        <div className="home-form">
            <div className="form-title">
                <h1>Edit Donate</h1>
            </div>
            <div className="inputs">
                <ul>
                    <form onSubmit = {e => submit(e)} >
                      
                        <li>
                            
                            <label htmlFor="Title">Title:</label>
                            <input required min="0" type="text" className="Title" name="Title" defaultValue={donateData[0].Title}  onChange={e => handleFormChange(e, 0)}></input> 
                        
                            <label htmlFor={"Content"}>Address:</label>
                            <textarea type="text" id={"block"} name={"Content"} className="block" defaultValue={donateData[0].Content}  onChange={e => handleFormChange(e, 0)} ></textarea>
                        
                        </li> 

                        <li>
                            
                            <label htmlFor="Title">Title:</label>
                            <input required min="0" type="text" className="Title" name="Title" defaultValue={donateData[1].Title}  onChange={e => handleFormChange(e,1)}></input> 
                        
                            <label htmlFor="Title">Email:</label>
                            <input required min="0" type="text" className="Title" name="Title" defaultValue={donateData[1].Content}  onChange={e => handleFormChange(e,1)}></input> 
                        
                        </li> 
          
                    
                        <li> 
                            <label htmlFor="Pass">Password</label>
                            <input required type="password" id="Pass" name="Pass" ></input>
                            <button id="submit-btn" type="submit">Submit</button>
                        </li>
                        
                    </form>

                </ul>

            </div>
            
        
        </div>
    );
    }

       
}

