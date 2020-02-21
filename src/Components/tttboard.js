import React from 'react';
import { Component } from 'react';
import Square from './tttsquares.js';
import {Button} from 'react-bootstrap';
import '../App.css';
class Board extends Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        over: false,
        player_A:"",
        player_B:"",
      };
    }

    componentDidMount(){
       var A = prompt("Enter name of First Player");
       var B = prompt("Enter name of Second Player");
      this.setState({
        player_A: A,
        player_B: B,
      })

    }
    handleClick(i) {
      const squares = this.state.squares.slice();
      
      if (this.winner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        
      });
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }

    winner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    render() {
      let status = 'Player : ' + (this.state.xIsNext ? this.state.player_A : this.state.player_B);
      const squares = this.state.squares.slice();
      const winner = this.winner(squares);
      var res= false
      if(winner){
        status = 'Game Over!!! Winner is ' + (!this.state.xIsNext ? this.state.player_A : this.state.player_B);
        res = true
      }
      else if(squares.indexOf(null)===-1){
        status = "Game Draw!!!";
        res = true
      }
      return (
        
        <div className="out">          
          <div className="status">{status}</div>
          <table border='0' rules="all">
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </table>
          <br></br>

          { res && <div className='rg'><Button variant="primary" href='/tic-tac-toe/play' >Restart Game</Button>
            </div>
            }
        </div>
        
      );
    }
  }

  export default Board;