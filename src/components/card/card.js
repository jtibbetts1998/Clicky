import React from "react";
import "./card.css";

const cardStyle = {
    width: '200px',
    height: '200px'
};

function shuffle(Characters) {
    var currentIndex = Characters.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = Characters[currentIndex];
        Characters[currentIndex] = Characters[randomIndex];
        Characters[randomIndex] = temporaryValue;
    }

    return Characters;
}


function Card(props) {
    var hello = shuffle(props.Characters)
    return (
        hello.map(char => (

            <button key={char.id} clicked="no" className="button" onClick={props.yawn}>
                <div className="Nope" >
                    <div className="img-container" style={(cardStyle)}>
                        <img alt={char.name} src={char.image} />
                        <p>{char.about}</p>
                    </div>
                </div>
            </button>
        ))
    );
}

export default Card;