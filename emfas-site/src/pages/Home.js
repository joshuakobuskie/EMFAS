import "./Home.css";
//import truck from "../truck.png";
import our_story from "../images/truck.png"
import what_we_do from "../images/wwd.png";


export default function Home(){
    return(
        
        
        <div className="home">
            <div className="block1">
                <div className="title-stats">
                    <h2>Englishtown Manalapan</h2>
                    <h1>First Aid Squad</h1>
                    
                    <table className="stats-table">
                        <tr>
                            <td>Avg Response Time</td>
                            <td>Total Calls Taken</td>
                            <td>Miles Driven</td>
                        </tr>
                        <tr>
                            <th>-- mins</th>
                            <th>-- calls</th>
                            <th>-- miles</th>
                        </tr>
                    </table>
                  

                </div>
               {/*  <div className= "truck-img"> 
                        <img src={truck} className="truck"/> 
                    </div>   
                */}
             
            </div>
            <div className="block2">

                <div className="our-story">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className="our-story-img">
                    <img src={our_story} className="story-img"></img>
                </div>
            </div>

            <div className="block3">
                

                <div className="what-we-do-img">
                    <img src={what_we_do} className="wwd-img"></img>
                </div>
                <div className="what-we-do">
                    <h1>What We Do</h1>
                    <p>The Englishtown - Manalapan Volunteer First Aid Squad serves the towns of Englishtown and Manalapan, Monmouth county New Jersey, 
                        with prompt emergency medical services 24 hours a day, seven days a week, 365 days a year.  Most of the men and woman that staff our 
                        ambulances are volunteers who give up their free time to save the lives of their neighbors. 
                         We have provided our services for the last 75 years and we look forward to another 75 years of serving our community.
                    </p>
                </div>
                
            </div>


        </div>
        
    
        

    );

}