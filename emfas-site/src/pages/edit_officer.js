import "./edit_officer.css";
import { useState, useEffect } from 'react';
import $ from "jquery";


export default function Edit_Officer(){

    

    const [officer, setOfficer] = useState([])
    const [orig_officer, saveOrig] = useState([]);

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
        setOfficer(res);
        saveOrig(res);
        })
        .catch((e) => {
        console.log(e.message)
        })
    }, [])

    //const orig_officer = officer;
    //console.log("original", orig_officer);
 

    
    //const [formFields, setFormFields] = useState([{position: ' ' , name: ' ' , email: ' ', phone: ' '}]);

    const handleFormChange = (e, i) => {
        //console.log(i, e.target.name);
        let data = [...officer];
        data[i][e.target.name] = e.target.value;
        //console.log(data);
        setOfficer(data);
        //console.log(officer);

    }

    //const [result, setResult]=useState('');
    const submit = (e) => {
        e.preventDefault();
        //console.log(officer.length);
        let len = officer.length;        
        let data;
        if(officer === orig_officer){
            alert("Nothing to change!");
            return;
        }
        officer.map((officer,i)=> {

            if(i < len-1){
                //console.log(i);

                data = {
                    NewPos: officer.Position,
                    NewName: officer.Name,
                    NewEmail: officer.Email,
                    NewPhone: officer.Phone,
                    CurPos: orig_officer[i].Position,
                    CurName: orig_officer[i].Name
                };
            
              /* $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/njitDev/updateOfficers.php',
                    data: data,
                    success(data){
                        //alert("Your information has been submitted!");
                        console.log(data);
                    },
                    error(err) {
                        //alert("Something went wrong. Please try again.");
                      }
         
                });*/



            }
            else{
                data = {
                    NewPos: officer.Position,
                    NewName: officer.Name,
                    NewEmail: officer.Email,
                    NewPhone: officer.Phone,
                    CurName: " ",
                    CurPos: " "
                };
            
            }
                  
           if(data.CurPos === " " && data.CurName === " "){
                $.ajax({
                    type: "POST",
                    url: 'https://emfas.org/njitDev/addOfficers.php',
                    data: data,
                    success(data){
                        alert("Your information has been submitted!");
                    },
                    error(err) {
                        alert("Something went wrong. Please try again.");
                      }
         
                });
            }


        });
   
     };

    

    const add = (e) =>{
        e.preventDefault();
        let object = {
            Position: ' ',
            Name: ' ',
            Email: ' ',
            Phone: ' '
        };
        setOfficer([...officer, object]);
        //console.log(officer);

    }

    const remove = (e, i) =>{
        //e.preventDefault();
        let data = [...officer];
        //console.log(orig_officer[i].Position);
        let post = {
            CurPos: data[i].Position,
            CurName: data[i].Name
        }

        console.log(post);

        //console.log(data);

        $.ajax({
            type: "POST",
            url: 'https://emfas.org/njitDev/removeOfficers.php',
            data: post,
            success(data){
                //alert("Your information has been submitted!");
                console.log(data);

            },
            error(err) {
                alert("Something went wrong. Please try again.");
              }
 
        });
        

        data.splice(i, 1);
        //setOfficer(data);

    }

    return(
        <div className="officers-form">
         
            <ul>
                <form onSubmit = {e => submit(e)} >
                    {officer.map((officer,i)=>

                    <li key={i}>
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
                        <button className="button" onClick={e => remove(e, i) }>Remove</button>
                    </li> 
                    
                    )}
                
                    <li>
                        <button type="submit">Submit</button>
                    </li>

                    <li>
                        <button onClick={e => add(e)}>Add</button>
                    </li>
                
                    
                </form>

            </ul>
        
        </div>
    );

       
}



