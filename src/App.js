import React, { Component } from 'react';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import CardList from './components/CardList/CardList';
import Card from './components/Card/Card';
import schools from './schools.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0,
      gameMessage: "Are you an ACC fan? Click an Image to begin!",
      schools: schools,
      unClickedSchools: schools
    }
  }

  // Shuffle Array
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleChange = (id) => {
    // Check if the id has been chosen
    const failedGuess = this.state.unClickedSchools.find(school => school.id === id);
    if (failedGuess === undefined) {
      this.setState({
        score: 0,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        gameMessage: "Sorry wrong choice. Are you really an ACC fan? Click an image to play again!",
        schools: schools,
        unClickedSchools: schools
      });
    } else {
      const updatedSchools = this.state.unClickedSchools.filter(school => school.id !== id);    
      this.setState({
        score: this.state.score +1,
        gameMessage: "You know your ACC Teams! Please choose again!",
        schools: schools,
        unClickedSchools: updatedSchools
    });
    }
    this.shuffleArray(schools); 
  }

  render() {
    return (
      <div>
        <ScoreBoard
          gameMessage= {this.state.gameMessage} 
          score={this.state.score}
          topScore ={this.state.topScore}
        />
        <CardList>
          {this.state.schools.map(school => 
            {return(
              <Card  
                handleChange = {this.handleChange} 
                name={school.name} 
                image={school.image} 
                id={school.id} 
                key={school.id}
              />
            )}
          )}
        </CardList>
      </div>
    );
  }
}

export default App;
