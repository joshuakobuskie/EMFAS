import "./edit_officer.css";
import { useState, useEffect, useRef } from 'react';
import $, { post } from "jquery";


export default function Edit_Officer(){

    const [officer, setOfficer] = useState([])
    const [orig_officer, saveOrig] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch('http://emfas.org/njitDev/getOfficers.php')
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
        let passwd = document.getElementById("Pass");
       
        e.preventDefault();    
        let data;

        let update_cnt = 0;

        officer.map((officer,i)=> {
        
            data = {
                NewPos: officer.Position,
                NewName: officer.Name,
                NewEmail: officer.Email,
                NewPhone: officer.Phone,
                Pass: passwd.value,
               
            };
            //console.log(i, orig_officer.length-1, data);
            if(i >= orig_officer.length){
                //console.log("adding");
                console.log(data);
                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/njitDev/addOfficers.php',
                    data: data,
                    async: false,
                    success(data){
                        update_cnt += 1;
                        //console.log("Officer Added");
                    },
                    error(err) {
                        alert("Something went wrong. Please try again.");
                    }
        
                });

                
            }
            else{
                data = {
                    NewPos: officer.Position,
                    NewName: officer.Name,
                    NewEmail: officer.Email,
                    NewPhone: officer.Phone,
                    Pass: passwd.value,
                    CurPos: orig_officer[i].Position,
                    CurName: orig_officer[i].Name
                }
                //console.log(data);
                
            
            if(data.CurPos !== officer.Position || data.CurName !== officer.Name || orig_officer[i].Email != officer.Email || orig_officer[i].Phone != officer.Phone ){
         

                console.log(i, data);
                console.log(i, officer);

                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/njitDev/updateOfficers.php',
                    data: data,
                    success(data){
                        update_cnt+=1;
                        console.log("Officer Updated");
                    },
                    error(err) {
                        alert("Something went wrong. Please try again.");
                    }
        
                });
            }
        }

        });   
        if(update_cnt > 0){
            alert("Officers Updated");
            window.location.reload();
        }
     };

    const add = (e) =>{
        e.preventDefault();
        let object = {
            Position: '',
            Name: '',
            Email: '',
            Phone: ''
        };
        setOfficer([...officer, object]);
        //console.log(officer);

    }

    const remove = (e, i) =>{
        e.preventDefault();
        let passwd = document.getElementById("Pass");
        if(window.confirm("Are you sure you want to remove this officer?")){
            let officer_data = [...officer];
            //if officer already existed in the db
            if( i <= orig_officer.length){
                console.log(orig_officer.length);
                //console.log(orig_officer[i].Position);
                let post = {
                    CurPos: officer_data[i].Position,
                    CurName: officer_data[i].Name,
                    Pass: passwd.value
                }
                console.log(officer.length);
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
                            console.log(officer.length);
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
                        {/*<label htmlFor="ord_id">Order:</label>
                        <input type="text" id="ord_id" name="ord_id"></input> */}
                        <label htmlFor="Position">Position:</label>
                        <input type="text" id="position" name="Position" defaultValue={officer.Position}  onChange={e => handleFormChange(e, i)} ></input>
                        <label htmlFor="Name">Name: </label>
                        <input type="text" id="Name" name="Name" defaultValue={officer.Name}   onChange={e => handleFormChange(e, i)}></input>
                        <label htmlFor="Email">Email:</label>
                        <input type="text" id="Email" name="Email" defaultValue={officer.Email}  onChange={e => handleFormChange(e, i)} ></input>
                        <label htmlFor="Phone">Phone:</label>
                        <input type="text" id="Phone" name="Phone" defaultValue={officer.Phone}   onChange={e => handleFormChange(e, i)}></input>
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

