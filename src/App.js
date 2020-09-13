import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import MembersContainer from './containers/MembersContainer';
import PersonasContainer from './containers/PersonasContainer';
// import NavBar from './components/navBar'

class App extends React.Component {

  render() {
    return (
      <>
       
          <div className="App">  
            <MembersContainer /><br/>
            <PersonasContainer /><br/>
          </div>
      </>
    );
  }
}

export default connect()(App);
