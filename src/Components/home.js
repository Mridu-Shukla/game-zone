import React from 'react';
import { Component } from 'react';
import {Container, Button, Table,Jumbotron} from 'react-bootstrap';
import '../App.css';
class Home extends Component{
    render(){
        return(
            <Container>
                
            <Jumbotron>
              <h1>Welcome to the Game Zone!!!</h1>
            <p>
              A gaming platform with some amazing games to play and enjoy....
            </p>
            
          </Jumbotron>
          <h3>Game Available</h3>
          <br></br>
          <div className="games">
          <Table striped hover responsive >
              <tbody>
                  <tr></tr>
              <tr>
                  <td>1. Tic-Tac-Toe</td>
                  <td><Button variant="success" className='pb' href='/tic-tac-toe'>Play Now</Button></td>
              </tr>
              <tr>
                  <td>2. Connect Four</td>
                  <td><Button variant="success" className='pb'  href='/connect-four'>Play Now</Button></td>
              </tr>
              
              </tbody>
              
          </Table>
          </div>
          </Container>
        );
    }
}

export default Home;