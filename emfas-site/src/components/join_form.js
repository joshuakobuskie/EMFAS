import Join_formCSS from './join_form.css';

export default function Join_form(){
    return(
        <div className={Join_formCSS.container}>
            <form>
                <div className="field">
                  <h2><label>Name</label></h2>  
                    <input type="text" name="name" ></input>
                </div>
                
                    <div className="sameline">
                      <h2><label >Age</label></h2>
                        <input type="text" name="age" ></input>
                   
                       <h2><label>Phone Number</label></h2>
                        <input type="phone" name="phone" ></input>
                    </div>
               
                <div className="field">
                 <h2><label>Email</label></h2>
                    <input type="email" name="email" ></input>
                </div>
                
                <button className='button'>Submit</button>
               
            </form>
        </div>
    )

}