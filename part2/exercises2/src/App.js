import React from 'react';
import './App.css';
import ListCandidateName from './components/CandidateNames';
import ListCandidateData from './components/CandidateData';
import {Sidekick} from './components/Sidekick'
import {SelectedCrew} from './components/SelectedCrew';

//this is the dashboard

  //Names   -- clickable, always present   
  //Data -- appears when name is clicked
  //images -- appears when name is clicked
  //selections -- added to list via button


function App() {
  return (
<div className='similarComponents'>
    <ListCandidateName />    
    <ListCandidateData />
    <Sidekick />
    <SelectedCrew />
</div>
  );
}




export default App;
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/