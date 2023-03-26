import Join_formCSS from './join_form.css';

export default function Join_form(){
    return(
        <div className={Join_formCSS.container}>
            <form>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" ></input>
                </div>
                <div className="field">
                    <label>Age</label>
                    <input type="text" name="age" ></input>
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input type="text" name="phone" ></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" ></input>
                </div>
                <button className='button'>Submit</button>
               
            </form>
        </div>
    )

}