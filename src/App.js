import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ContainerOne from './ContainerOne';
import ContainerTwo from './ContainerTwo';
import ContainerThree from './ContainerThree';
import ContainerFour from './ContainerFour';
import ContainerFive from './ContainerFive';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContainerOne />
        <ContainerTwo />
        <ContainerThree />
        <ContainerFour />
        <ContainerFive />
        <Footer />
      </div>
    );
  }
}

export default App;
