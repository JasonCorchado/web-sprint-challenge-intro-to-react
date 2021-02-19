import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters'
import styled from 'styled-components'

  const Header = styled.h1`
  color: black;
  font-family: fantasy; 
  `
  
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const baseUrl = 'https://swapi.dev/api/people/'
  const [char, setChar] = useState([])
  

  useEffect(() => {  
    axios.get(`${baseUrl}`)
    .then((res) => {
      setChar(res.data)
      console.log(res.data)
    })
  },[])  
  
 
  return (
    <div className="App">
      <Header className="Header">Star Wars</Header>
      <Characters char = {char} />
    </div>
  );
}

export default App;
