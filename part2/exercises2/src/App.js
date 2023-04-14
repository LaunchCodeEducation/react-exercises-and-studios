import React from 'react';
import './App.css';
 import OceanList from './components/OceanList';
//import OceanProfile from './components/OceanProfile.js';
//import Aquarium from './components/Aquarium';

//this is the dashboard

  //Names   -- clickable, always present   
  //Data -- appears when name is clicked
  //images -- appears when name is clicked
  //selections -- added to list via button


function App() {
  return(
    <>
    <h1>The Amazing Ocean!</h1>
    <div>
    <OceanList />
    </div>
    </>
  );
}



// function App() {
// return (
//   <>
//     <div className='similarComponents'>
//       <CandidateName /> 
//       <CandidateData />
//       <Sidekick />
//       <NameTable />
//     </div>
//     <div>
//       <button>Add to Crew List </button>
//     </div>
//   </>
//   );
// }




export default App;
// https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/