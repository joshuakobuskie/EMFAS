import "./edit_officer.css";
import { useState, useEffect } from 'react';
import $ from "jquery";


export default function Edit_Officer(){

    

    const [officer, setOfficer] = useState([])
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
        setOfficer(res)
        })
        .catch((e) => {
        console.log(e.message)
        })
    }, [])

 

     const handleClick=(e)=> {
        e.preventDefault();
         const form = $(e.target);
         $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data){
                alert("Your information has been submitted!");
                console.log(data)
            },
            error(err) {
                alert("Something went wrong. Please try again.");
              }

        });
      };

    //const [formFields, setFormFields] = useState([{position: ' ' , name: ' ' , email: ' ', phone: ' '}]);

    const handleFormChange = (e, i) => {
        //console.log(i, e.target.name);
        let data = [...officer];
        data[i][e.target.name] = e.target.value;
        //console.log(data);
        setOfficer(data);
        console.log(officer);


    }

    const submit = (e) => {
        e.preventDefault();
        console.log(officer);
    }

    const add = (e) =>{
        e.preventDefault();
        let object = {
            Position: ' ',
            Name: ' ',
            Email: ' ',
            Phone: ' '
        };
        setOfficer([...officer, object]);
        console.log(officer);

    }

    const remove = (e, i) =>{
        e.preventDefault();
        let data = [...officer];
        data.splice(i, 1);
        setOfficer(data);

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



