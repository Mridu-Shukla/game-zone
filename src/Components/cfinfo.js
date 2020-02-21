import React from 'react';
import { Component } from 'react';
import {Container, Button, Jumbotron} from 'react-bootstrap';

class CFInfo extends Component{
    render(){
        return(
            <Container>
                
            <Jumbotron>
             <h1>Connect Four</h1>   
            <p>
            To win Connect Four you must be the first player to get four of your colored checkers in a row either horizontally, vertically or diagonally.
            </p>
            <p>
              <Button variant="primary" href='/connect-four/play'>Start Game</Button>
            </p>
          </Jumbotron>
          <center><h3>Instructions</h3></center>
          <hr></hr>
          <ul>
          <li>The game is played on a grid that's 7 squares by 6 squares.</li>
            <li>You are <strong>Red</strong>, your friend is <strong>Blue</strong>. Players take turns putting their marks in empty dots.</li>
            <li>The first player to get 4 of his dots in a row (up, down, across, or diagonally) is the winner.</li>
            <li>When all 42 dotss are full, the game is over.</li>
            <li>If no player has 4 connects in a row, the game ends in a tie.</li>
          </ul>
          </Container>
        );
    }
}

export default CFInfo;