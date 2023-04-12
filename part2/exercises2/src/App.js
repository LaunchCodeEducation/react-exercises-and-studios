import React from 'react';
import './App.css';
import CandidateName from './components/CandidateNames';
import CandidateData from './components/CandidateData';
import Sidekick from './components/Sidekick'
import SelectedCrew from './components/SelectedCrew';

//this is the dashboard

  //Names   -- clickable, always present   
  //Data -- appears when name is clicked
  //images -- appears when name is clicked
  //selections -- added to list via button


function App() {
return (
  <>
    <div className='similarComponents'>
      <CandidateName /> 
      <CandidateData />
      <Sidekick />
      <SelectedCrew />
    </div>
    <div>
      <button>Add to Crew List </button>
    </div>
  </>
  );
}




export default App;
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/