import Join_formCSS from './join_form.css';
import { useState } from 'react';


const Join_form=()=>{
    const [name, setName]= useState('');
    const [age, setAge]= useState('');
    const [phone, setPhone]= useState('');
    const [email, setEmail]= useState('');

    //const [showAlert, setShowAlert] = useState(false);


    function handleClick(e) {
        e.preventDefault();
        if (name && age && phone && email != ''){
            alert('Your information has been submitted!')
        }
        else{
            alert('You must fill the form to submit.')
        }
      }

    return(
        <div className="form-container">
            <form action='#'>
                <div className="field">
                  <h2><label>Name</label></h2>  
                    <input type="text" required value={name} onChange={(e)=> setName(e.target.value)} ></input>
                </div>
                
                    <div className="sameline">
                      <h2><label >Age</label></h2>
                        <input type="text" required value={age} onChange={(e)=> setAge(e.target.value)} ></input>
                   
                       <h2><label>Phone Number</label></h2>
                        <input type="phone" required value={phone} onChange={(e)=> setPhone(e.target.value)}  ></input>
                    </div>
               
                <div className="field">
                 <h2><label>Email</label></h2>
                    <input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)} ></input>
                </div>
                
                <button  onClick={handleClick} className='button'>Submit</button>
               
            </form>
        </div>
    )

}

export default Join_form;