import "../styles/edit_officer.css";
import { useState, useEffect } from 'react';
import $, { post } from "jquery";


export default function Edit_Officer(){

    const [officer, setOfficer] = useState([])
    const [orig_officer, saveOrig] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch('https://emfas.org/njitDev/getOfficers.php')
        if (!response.ok) { console.log(response);
            throw new Error('Data could not be fetched!')
        } else {
            return await response.json()
        }
    }
    useEffect(() => {
        //prevOfficer.current = officer;
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
        setOfficer(res);
        })
        .catch((e) => {
        
        })
    
    }, [])

    const handleFormChange = (e, i) => {
        let data = [...officer];
        data[i][e.target.name] = e.target.value;
    }
    const submit = (e) => {
        e.preventDefault();    
        let data;
        let update_cnt = 0;
        let err_cnt = 0;
        let passwd = document.getElementById("Pass");
       

        officer.map((officer,i)=> {
            data = {
                Priority: officer.Priority,
                NewPos: officer.Position,
                NewName: officer.Name,
                NewEmail: officer.Email,
                NewPhone: officer.Phone,
                Pass: passwd.value,
            };
            //field is newly added
            if(i > orig_officer.length-1){
                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/njitDev/addOfficers.php',
                    data: data,
                    async: false,
                    success(data){
                        if(data == '"Invalid Credentials"'){
                            err_cnt+=1;
                        }
                        else{
                            update_cnt+=1;
                            //console.log("adding at position " + i);
                        }
                    },
                    error(err) {
                        alert("Something went wrong. Please try again.");
                    }
        
                });
                window.location.reload();
            }
            //field already in database
            else{

                data = {
                    Priority: officer.Priority,
                    NewPos: officer.Position,
                    NewName: officer.Name,
                    NewEmail: officer.Email,
                    NewPhone: officer.Phone,
                    Pass: passwd.value,
                    CurPos: orig_officer[i].Position,
                    CurName: orig_officer[i].Name
                }
                if(orig_officer[i].Priority !== officer.Priority || data.CurPos !== officer.Position || data.CurName !== officer.Name || orig_officer[i].Email !== officer.Email || orig_officer[i].Phone !== officer.Phone ){
                                      
                    $.ajax({
                        type: "POST",
                        url: 'https://emfas.org/njitDev/updateOfficers.php',
                        data: data,
                        async:false,
                        success(data){
                            if(data == '"Invalid Credentials"'){
                                err_cnt+=1;
                            }
                            else{
                                update_cnt+=1;
                                //console.log("Officer Updated");
                            }
                        },
                        error(err) {
                            alert("Something went wrong. Please try again.");
                        }
            
                    });
                }
            }

        });  //end loop through officer json

        if(err_cnt > 0){
            alert("Something went wrong. Please try again!")
        }
        if(update_cnt > 0){
            alert("Officers Updated");
            console.log(officer);
        }
     };

    const add = (e) =>{
        e.preventDefault();
        let object = {
            Order: '',
            Position: '',
            Name: '',
            Email: '',
            Phone: ''
        };
        setOfficer([...officer, object]);
    }

    const remove = (e, i) =>{
        e.preventDefault();
        let passwd = document.getElementById("Pass");
        
        if(window.confirm("Are you sure you want to remove this officer?")){
            let officer_data = [...officer];
            //if officer already existed in the db
            if( i < orig_officer.length){
                let post = {
                    CurPos: officer_data[i].Position,
                    CurName: officer_data[i].Name,
                    Pass: passwd.value
                }
                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/njitDev/removeOfficers.php',
                    data: post,
                    async: false,
                    success: function(data){
                        if(data == '"Invalid Credentials"'){
                            alert("Something went wrong! Try again");
                        }
                        else{
                            document.getElementById(i).remove();
                            let j = i;
                            while (j <= officer.length){
                                officer[i].Priority -= 1;
                                j+=1;
                            }
                        }
                    },
                });
            }
            //new officer field that you want to delete
            else{
                document.getElementById(i).remove();
            }
        }
    
    }

    return(
        <div className="officers-form">
         
            <ul>
                <form onSubmit = {e => submit(e)} >
                    {officer.map((officer,i)=>
                    
                    <li id={i} key={i}>
                        
                        <label htmlFor="Priority">Order:</label>
                        <input required type="text" id={"Priority-" + i} className="Priority" name="Priority" defaultValue={officer.Priority}  onChange={e => handleFormChange(e, i)}></input> 
                        <label htmlFor="Position">Position:</label>
                        <input type="text" id={"position" + i} name="Position" defaultValue={officer.Position}  onChange={e => handleFormChange(e, i)} ></input>
                        <label htmlFor="Name">Name: </label>
                        <input type="text" id={"Name" + i} name="Name" defaultValue={officer.Name}   onChange={e => handleFormChange(e, i)}></input>
                        <label htmlFor="Email">Email:</label>
                        <input type="text" id={"Email" + i} name="Email" defaultValue={officer.Email}  onChange={e => handleFormChange(e, i)} ></input>
                        <label htmlFor="Phone">Phone:</label>
                        <input type="text" id={"Phone" + i} name="Phone" defaultValue={officer.Phone}   onChange={e => handleFormChange(e, i)}></input>
                        <button className="rm-button" onClick={e => remove(e, i) }>Remove</button>
                    </li> 
                    
                    )}
                
                    <li>
                       <button id="add-btn" onClick={e => add(e)}>Add</button>
                    </li>
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

