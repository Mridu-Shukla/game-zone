import React from 'react';
import { Component } from 'react';
import Row from './cfRows.js';
import {Button} from 'react-bootstrap';
import '../App.css';
class CFBoard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
        cp: null,
        board:[],
        bg:1,
        status:'',
        over:false,
        player_A:'',
        player_B:'',
      };
    }

    initialize =(A)=>{
        let board =[];
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++) { row.push(null) }
            board.push(row);
          }

          this.setState({
            board:board,
            cp: A,
               over: false,
          });
    }

    changePlayer= ()=>{
      return (this.state.cp === this.state.player_B) ? this.state.player_A : this.state.player_B;
    }
    componentDidMount(){
       var A = prompt("Enter name of First Player");
       var B = prompt("Enter name of Second Player");
       this.initialize(A);
      this.setState({
        player_A: A,
        player_B: B,
      })
      

    }

    
    checkVertical(board) {

        for (let r = 3; r < 6; r++) {
          for (let c = 0; c < 7; c++) {
            if (board[r][c]!==null) {
              if (board[r][c] === board[r - 1][c] &&
                  board[r][c] === board[r - 2][c] &&
                  board[r][c] === board[r - 3][c]) {
                return 1;    
              }
            }
          }
        }
      }
      
      checkHorizontal(board) {

        for (let r = 0; r < 6; r++) {
          for (let c = 0; c < 4; c++) {
            if (board[r][c]!==null) {
              if (board[r][c] === board[r][c + 1] && 
                  board[r][c] === board[r][c + 2] &&
                  board[r][c] === board[r][c + 3]) {
                return 1;
              }
            }
          }
        }
      }
      
      checkDiagonalRight(board) {

        for (let r = 3; r < 6; r++) {
          for (let c = 0; c < 4; c++) {
            if (board[r][c]!==null) {
              if (board[r][c] === board[r - 1][c + 1] &&
                  board[r][c] === board[r - 2][c + 2] &&
                  board[r][c] === board[r - 3][c + 3]) {
                return 1;
              }
            }
          }
        }
      }
      
      checkDiagonalLeft(board) {

        for (let r = 3; r < 6; r++) {
          for (let c = 3; c < 7; c++) {
            if (board[r][c]!==null) {
              if (board[r][c] === board[r - 1][c - 1] &&
                  board[r][c] === board[r - 2][c - 2] &&
                  board[r][c] === board[r - 3][c - 3]) {
                return 1;
              }
            }
          }
        }
      }
      
      checkDraw(board) {
        for (let r = 0; r < 6; r++) {
          for (let c = 0; c < 7; c++) {
            if (board[r][c] === null) {
              return null;
            }
          }
        }
        return 'draw';    
      }

      
      checkAll(board) {
        return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
      }
      
    

    handleClick = (c)=>{
      if (!this.state.over) {
        let board = this.state.board;

        if (board[0][c]==null){
        
        for (let r = 5; r >= 0; r--) {
          if (board[r][c]== null) {
            board[r][c] = this.state.bg;
            break;
          }
        }
        
        let result = this.checkAll(board);
        console.log(result)
        if(result===1 || result===0) {
          this.setState({ board, over: true ,status:'win'});
        }
        else if(result === "draw") {
          this.setState({ board, over: true ,status:'draw'});
        }
        else {
          this.setState({ board, cp: this.changePlayer(), bg: (this.state.bg ===1 ?0:1) });
        }
      }
      } 
      

    }

    render() {
      let status = 'Player : ' + (this.state.cp );
      
      var res=false;

      var ress = this.state.status;
      if(ress==='win')
      {status = "Game Over!!! Winner is "+(this.state.cp);
       res = true;}
       else if(ress === 'draw'){
        status = "Game Over!!!"
        res = true;
       }
      return (
        
        <div className="out">  
        
          <div className="status">{status}</div>
          <table id="cf">
             <tbody>
            {this.state.board.map((row, i) => <Row key={i} row={row} play={this.handleClick} />)}
            </tbody>
          </table>
          <br></br>

          { res && <div className='rg'><Button variant="primary" href='/connect-four/play' >Restart Game</Button>
            </div>
            }
            >        
        </div>
        
      );
    }
    
  }

  export default CFBoard;