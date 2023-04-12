import details from './details.json';



//creating the list item using the names
//is this best as a function because it is creating the list? '
// TODO  add conditional rendering onClick



 //see houselist and houserow in pluralsight video
 //thinking namelist and data

 const CandidateName = () => {
   //mapping the data and finding the names - adding them as list items
   const NameDetails = details.map(
      (detail)=> {
         return(
            <li key={detail.id}>
               {detail.name}
            </li>
      )});

   return(
      
      <div className='candidateNames'>
         <h1>Candidate Names</h1>
         <ul>{NameDetails}</ul>
      </div>
   )
}


 export default CandidateName;