import details from './details.json';


//create list of all data points from the json file
const dataDetails = details.map((detail)=>(
   <div key={detail.id} className='candidateData' >
         <li>Name: <b>{detail.name}</b></li>
         <li>Age: <b>{detail.age} years</b></li>
         <li>Mass: <b>{detail.mass} kg</b></li>
         <li>Sidekick: <b>{detail.sidekick}</b></li>
         <br />
   </div>
));

//create list for data
function ListCandidateData(){
   return (
      <div>
         <h1 className='candidateData'>Candidate Data</h1>
         <ul>{dataDetails}</ul>
      </div>
   );
};

export default ListCandidateData;

/*
   This should show data of a selected candidate
   User clicks on name of candidate in the Names list
   onClick should be in CandidateNames.js and imported???  maybe???
*/