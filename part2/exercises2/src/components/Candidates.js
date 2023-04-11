import details from './details.json';

function CandidateName(){
   const displayName = details.map(
      (name, id)=> {
         return(
            <ul>
               <li key={id}>
               {name.name}
               </li>
            </ul>
         )
      }
   )
   return(
      
      <div className='candidateNames'>
         <h1>Candidate Names</h1>
         {displayName}
      </div>
   )
}

 export default CandidateName;