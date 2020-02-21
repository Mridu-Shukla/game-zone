import React from 'react';
import { Component } from 'react';
import {Container, Button, Jumbotron} from 'react-bootstrap';

class Info extends Component{
    render(){
        return(
            <Container>
                
            <Jumbotron>
             <h1>Tic-Tac-Toe</h1>   
            <p>
              It is a fun two player game...
            </p>
            <p>
              <Button variant="primary" href='/tic-tac-toe/play'>Start Game</Button>
            </p>
          </Jumbotron>
          <center><h3>Instructions</h3></center>
          <hr></hr>
          <ul>
          <li>The game is played on a grid that's 3 squares by 3 squares.</li>
            <li>You are <strong>X</strong>, your friend is <strong>O</strong>. Players take turns putting their marks in empty squares.</li>
            <li>The first player to get 3 of his marks in a row (up, down, across, or diagonally) is the winner.</li>
            <li>When all 9 squares are full, the game is over.</li>
            <li>If no player has 3 marks in a row, the game ends in a tie.</li>
          </ul>
          </Container>
        );
    }
}

export default Info;