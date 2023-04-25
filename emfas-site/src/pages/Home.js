import "../styles/Home.css";
import Footer from '../components/footer';

import { useState, useEffect} from 'react';

export default function Home(){

    const [stats, setStats] = useState([])   
    const fetchStats = async () => {
        const response = await fetch('https://emfas.org/getStats.php')
        if (!response.ok) { console.log(response);
            throw new Error('Data coud not be fetched!')
        } else {
            return await response.json()
        }

    }
   
    useEffect(() => {
        //prevOfficer.current = officer;
        fetchStats()
            .then((res) => {
                setStats(res);
            })
            .catch((e) => {
            })
        
        }, [])


    
    const [homeData, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch('https://emfas.org/getHome.php')
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
                setData(res);
            })
            .catch((e) => {
            })
        
        }, [])

   
      
    
    if(stats.length > 0 && homeData.length > 1){
        //console.log(stats, homeData);
        return(
            <div className="home">
                <div className="block1">
                    <div className="title-stats">
                        <h2>Englishtown Manalapan</h2>
                        <h1>First Aid Squad</h1>
                        
                        <table className="stats-table">
                            <caption><h3>{homeData[0].Title}</h3></caption>
                            <tr>
                                <td>Response Time</td>
                                <td>Calls Taken</td>
                                <td>Miles Driven</td>
                            </tr>
                            <tr>
                                <th>{stats[0].ResponseTime} mins</th>
                                <th>{stats[0].CallsTaken} calls</th>
                                <th>{stats[0].MilesDriven} miles</th>
                            </tr>
                        </table>
                    

                    </div>
        
                </div>
                <div className="block2">

                    <div className="about-ems">
                        <h1>{homeData[1].Title}</h1>
                        {/*<p>The Englishtown Manalapan First Aid Squad is a volunteer organization that serves the towns of Englishtown and Manalapan, NJ. 
                            The EMFAS has provided prompt emergency medical services 24/7/365 for the last 75 years. Most of our staff are volunteers who 
                            dedicate their time to save lives and make a difference in our community. Our ambulances carry pulse oximetry units, aspirin for 
                            cardiac emergencies, epinephrine for severe allergic reactions, C-PAP oxygen delivery for acute respiratory emergencies, Narcan for 
                            opioid overdoses, and other lifesaving tools. We continue to recruit new volunteers, and provide lifesaving training free of charge to 
                            all applicants. If you would like to learn more about volunteering with the squad, we provide a “ride-along” program where you can join 
                            us on a shift with no strings attached. More details about getting involved can be found on our “Join the Squad” page. 
                            Additionaly, information regarding the Dee Ziobro Scholarship Application can be found <a href="https://emfas.org/2019_Dee_Ziobro_Scholarship_App.pdf" target="_blank">here
                            </a>
                        </p>*/}
                        <p>
                        {homeData[1].Content}
                        </p>

                    </div>
                    <div className="about-ems-img">
                        <img src={require("../images/truck.png")} className="about-img" alt="loading"></img>
                    </div>
                </div>

                <div className="block3">
                    

                    <div className="wmems-img">
                        <img src={require("../images/wwd.png")} className="w-img" alt="loading"></img>
                    </div>
                    <div className="wmems">
                        <h1>{homeData[2].Title}</h1>
                        <p>
                            {/*The Western Monmouth Emergency Medical Services is a licensed Basic Life Support agency that supports our volunteers with the New Jersey Department 
                            of Health and Senior Services. WMEMS bills patients’ insurance carriers to redeem the BLS Ambulance transportation fee reimbursement, as provided by 
                            law. WMEMS has provided the squad with an exceptional group of per-diem Emergency Medical Technicians to assist staffing our ambulances while relieving 
                            our governing bodies from an estimated cost of $250,000.00 per year. Thanks to the WMEMS, we are able to maintain our services while providing enhanced 
                            training, reduced response times, and high quality emergency medical services to our community. The WMEMS has made new ambulances, vehicle insurance, and 
                            the annual donation and funding of the volunteer squad’s LOSAP program affordable. */}
                            {homeData[2].Content}
                        </p>
                    </div>
                    
                </div>

                <div className="block4">

                    <div className="billing">
                        <h1>{homeData[3].Title}</h1>
                        <p>{/*All information provided to the EMFAS crew and the WMEMS is protected under HIPAA regulations and collected through secure electronic systems. If insurance information is unavailable, our billing provider will contact you. WMEMS will accept assignments from the insurance company and does 
                            not seek to impose any financial hardship among our community members. If you have any concerns about WMEMS or our policies, please contact our president 
                        via email at president@emfas.org. Questions for our management team can be emailed to management@wmems.com.*/}
                             {homeData[3].Content}
                        </p>

                    </div>
                    <div className="about-ems-img">
                        <img src={require("../images/truck_lineup.png")} className="w-img" alt="loading"></img>
                    
                    </div>
                </div>

                <div className="block5">
                    <a href="http://emfas.org/Scholarship_App.pdf"> Additionally, access the Dee Ziobro Scholarship Application here</a>
                </div>
                <div className="footer">
                    <Footer className="foot" />
                </div>
        
            </div>
        );

    }
    else{
        return(
            <div className="home">
                <div className="block1">
                    <div className="title-stats">
                        <h2>Englishtown Manalapan</h2>
                        <h1>First Aid Squad</h1>
                        
                        <table className="stats-table">
                            <caption><h3>Week-to-Date Stats</h3></caption>
                            <tr>
                                <td>Response Time</td>
                                <td>Calls Taken</td>
                                <td>Miles Driven</td>
                            </tr>
                            <tr className="stats">
                                <th>--- mins</th>
                                <th>--- calls</th>
                                <th>--- miles</th>
                            </tr>
                        </table>
                    </div>
        
                </div>
                <div className="block2">

                    <div className="about-ems">
                        <h1>---</h1>
                        
                        <p>
                        ---
                        </p>

                    </div>
                    <div className="about-ems-img">
                        <img src={require("../images/truck.png")} className="about-img" alt="loading"></img>
                    </div>
                </div>

                <div className="block3">
                    

                    <div className="wmems-img">
                        <img src={require("../images/wwd.png")} className="w-img" alt="loading"></img>
                    </div>
                    <div className="wmems">
                        <h1>---</h1>
                        <p>
                            ---
                        </p>
                    </div>
                    
                </div>

                <div className="block4">

                    <div className="billing">
                        <h1>---</h1>
                        <p>---
                        </p>

                    </div>
                    <div className="about-ems-img">
                        <img src={require("../images/truck_lineup.png")} className="w-img" alt="loading"></img>
                    
                    </div>
                </div>
                <Footer className="foot" />

            </div>
        );

    }

}