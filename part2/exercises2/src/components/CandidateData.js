import details from './details.json';

//take in the id from the clicked item
//conditional rending

function CandidateData(props){
   return(
      <>
      <h1>Candidate Data</h1>
      <div className='candidateData'>
       {details.map((detail)=>(
         <div key={detail.id}>
            <ul>
               <li>Name: <b>{detail.name}</b></li>
               <li>Age: <b>{detail.age} years</b></li>
               <li>Mass: <b>{detail.mass} kg</b></li>
               <li>Sidekick: <b>{detail.sidekick}</b></li>
            </ul>
         </div>

      ))}
   </div>
   </>
   );
   
}

//wondering how to make this only display the selected 

// import CandidateName from './Candidates';

// function SelectedData(){
//    const selectedCandidate = CandidateName.name;
//    return (
//       <>
//       {selectedCandidate}
//       </>
//    );
// }




export default CandidateData;