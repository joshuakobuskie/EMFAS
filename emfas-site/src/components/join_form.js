import Join_formCSS from './join_form.css';
import { useState } from 'react';
import $ from "jquery";


const Join_form=()=>{
    const [name, setName]= useState('');
    const [age, setAge]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail]= useState('');
    const [result, setResult]=useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

     const handleClick=(e)=> {
        e.preventDefault();
         const form = $(e.target);
         $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data){
                alert("Your information has been submitted!");
                setResult(data);
            },
            error(err) {
                alert("Something went wrong. Please try again.");
              }

        });
      };

    return(
        <div className="form-container">
            <form 
             action="http://localhost:8000/server.php"
             method='POST'
             onSubmit={(event) => handleClick(event)}
            >
                <div className="field">
                  <h2><label htmlFor="name">Name</label></h2>  
                    <input type="text" id="name" name="name" required value={name}  onChange={(event) => handleNameChange(event)} ></input>
                </div>
                
                    <div className="sameline">
                      <h2><label htmlFor="age">Age</label></h2>
                        <input type="text" id="age" name="age" required value={age} onChange={(event)=> handleAgeChange(event)} ></input>
                   
                       <h2><label htmlFor="phone">Phone Number</label></h2>
                        <input type="phone" id="phone" name="phone" required value={phone} onChange={(event)=> handlePhoneChange(event)}  ></input>
                    </div>
               
                <div className="field">
                  <h2><label htmlFor="email">Email</label></h2>
                    <input type="email" id="email" name="email" required value={email} onChange={(e)=> handleEmailChange(e)} ></input>
                </div>
                <button type="submit" id="submit" name="submit" value="send" className="button" >Submit</button>
               
            </form>
            <h1>{result}</h1>

            
        </div>
    )

}

export default Join_form;