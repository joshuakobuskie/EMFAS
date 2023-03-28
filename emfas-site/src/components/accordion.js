import './accordion.css';
import React,{useState} from 'react';

export default function  Accordion(){
    const[selected, setSelected]= useState(null)

    const toggle=(i)=>{
        if(selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }


    return(
    
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item,i)=>(
                
                    <div className='item'>
                        <div className='title' onClick={()=>toggle(i)}>
                            <h2>{item.question}</h2>
                          <h2><span> {selected === i ? '-': '+'}</span></h2> 
                        </div>
                        <div className={selected === i ? 'content show': 'content'}>{item.answer}</div>
                    </div>
                  
                ))}
            </div>
         </div>
    
    )
}


const data=[{

    question:'Who can join?',
    answer:
        'No  previous training is necessary to join. Anyone over the age of 16 can join the squad.\
        Since riding members need to be on call for only one shift per week,\
        Since riding members need to be on call for only one shift per week,\
        we attract members from all walks of life.',

},
{

    question:'What types of memberships are there?',
    answer:
        'Senior Members are at least 18 years of age, are licensed EMT\'s and have been probationary members for varying periods of time,\
         depending upon experience.\n\
        Probationary Members are at least 18 years of age. They are the most recent additions to the squad and respond to first aid calls\
         together with at least two senior members.\n\
        Cadet Members are 16 & 17 years of age. They ride fewer hours per week and act as supplemental members to a crew.\
         Interested in becoming a cadet? E-mail cadets@emfas.org',
},
{

    question:'What kind of training is provided?',
    answer:
        'Members receive convenient CPR training and Emergency Medical Technician (EMT) classes, as well as continuing education courses.',
        
},


{

    question:'How much time do I need to commit?',
    answer:
        'Members volunteer once a week, either during the day (our strongest need) the evening or at night. Day crews are on call from 8am to 5pm,\
         evening crews are on call from 5p - 11p and night crews from 11pm to 5am(8am on Friday and Saturday). While on call, members usually relax\
          at our squad building or respond from home.  Many of our members respond while their children are in school or while they are at work \
          within our district. Additionally, members must ride a weekend crew once a month.  Weekend crew consists of one day shift of either \
          Saturday or Sunday. Cadet members are required to volunteer 20 hours a month. ',
        
},
{

    question:'What benefits do members receive?  ',
    answer:
        'Though the most significant benefit is the satisfaction of helping another, there are many perks to being a member of the Englishtown - Manalapan First Aid Squad.\
         These include training and equipment,  tuition credit for county colleges, scholarships, and Length of Service Award Program (LOSAP)\
          stipends, reduced township fees (including permits and Manalapan Recreation). ',
        
},
{

    question:'How do I join? ',
    answer:
        'If you are 18 years of age or older, call (732) 850-6488 or e-mail membership@emfas.org for a time/date to come in learn more about \
        the squad! \n\
        Interested in the cadet program? Are you between the ages of 16 & 18? If so please contact the cadets at cadets@emfas.org ',
        
},
]