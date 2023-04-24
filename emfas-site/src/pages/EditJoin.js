import "../styles/edit_join.css";
import { useState, useEffect } from 'react';
import $, { post } from "jquery";


export default function Edit_Join(){

    const [homeData, setData] = useState([])
    const [orig_Data, saveOrig] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch('https://emfas.org/getJoin.php')
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
                NewTitle: homeData.Title,
                NewContent: homeData.Name,
                OldContent: orig_Data[i].Content,
                OldTitle: orig_Data[i].Title,
                passwd: passwd.value
            }
            if(data.OldContent != data.NewContent|| data.NewTitle != data.OldTitle){
                                    
                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/updateJoin.php',
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
            alert("Home Page Updated");
            window.location.reload();
        }
     };
    
     if(document.getElementById("block0")){

        document.getElementById("block0").remove();
        document.querySelector('label[for=content0]').remove();
     }
    return(
        <div className="home-form">
            <div className="form-title">
                <h1>Edit Join</h1>
            </div>
            <div className="inputs">
                <ul>
                    <form onSubmit = {e => submit(e)} >
                        {homeData.map((homeData,i)=>
                            <li id={i} key={i}>
                                
                                <label htmlFor="Title">Title:</label>
                                <input required min="0" type="text" id={"Priority-" + i} className="Title" name="Title" defaultValue={homeData.Title}  onChange={e => handleFormChange(e, i)}></input> 
                            
                                <label htmlFor={"content" + i}>Block{i}:</label>
                                <textarea type="text" id={"block" + i} name={"content" + i} className="block" defaultValue={homeData.Content}  onChange={e => handleFormChange(e, i)} ></textarea>
                            
                            </li> 
                        )}
                    
                        <li > 
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

