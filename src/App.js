
import React from "react";
import './App.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//importing profile component
import Profile from "./component/Profile"
//App class component
class App extends React.Component{
  constructor(props) {
      console.log('constructor()')
        super(props)
        this.state = {
            Person : {
            fullName : "Eya Letaief",
            bio :"Go Mycode",
            imgSrc : "./images/profile.jpg",
            profession :"full stack development"},
            show : false,
            intervall :null,
            timer:0,
        }
    }
 showVisibility = () =>{
  this.setState({
    show :!this.state.show
  })
 }
  render(){
   return (
    <div className="content" >
      <Button variant="primary" onClick={this.showVisibility}>{this.state.show? "Hide Profile" : "Show Profile"}</Button>{' '}
      {this.state.show ?
        (<> 
            <img src={this.state.Person.imgSrc} style = {{width:"30%"}}alt="img"></img>
            <h3>Welcome ! I'm <span style={{color:"cyan"}}> {this.state.Person.fullName}</span></h3>
            <h3>I am currently learning <span style={{color:"cyan"}}> {this.state.Person.profession}</span> at <span style={{color:"cyan"}}>{this.state.Person.bio}</span></h3>
            <h5>component's launch time: </h5>
            <Profile />
        </>): (<h6>Click on the button down below to show the profile</h6>)
      }  
    </div>
  );
  }
}

export default App;
