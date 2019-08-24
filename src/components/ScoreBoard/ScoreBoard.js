import React from "react";
import './ScoreBoard.css';

const ScoreBoard = (props) => {
    return (
    <nav>
        <h1 className="navbar-brand">ACC Challenge!</h1>
        <p> Click on an ACC logo but remember which logo you choose! After clicking, the order of the logos will be shuffled. If a team logo is clicked on twice, the ACC Challenge will reset and your score will return to zero. See if you can get the top score and test your memory for all of the ACC Teams!</p>
        <div>
            <p><strong>Current Score: </strong>{props.score}</p>
            <p><strong>Top Score: </strong>{props.topScore}</p>
            <p>{props.gameMessage}</p>
        </div>
    </nav> 
    )
};

export default ScoreBoard;
