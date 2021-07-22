import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css";

function TinderCards() {
    const [people,setPeople]=useState([
        {
            name:'Elon Musc',
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name:'Jeff Bezos',
            url:"https://wallpapercave.com/wp/wp4025589.jpg"
        }
    ]);

    const swiped = (direction,nameToDelete) => {
        console.log('removing ' +nameToDelete)
      }
      
      const outOfFrame = (name) => {
        console.log(name + ' left the screen')
      }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer"> 
            {people.map((person)=>(
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage:`url(${person.url})`}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}    
            </div>
            
        </div>
    )
}

export default TinderCards
