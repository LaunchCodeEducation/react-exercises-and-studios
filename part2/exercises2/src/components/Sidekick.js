import details from './details.json';

const Sidekick = () => {
   const dataDetails = details.map((detail)=>(
      <div key={detail.id} className='sidekicks' >
      <img src = {detail.image} alt="sidekick" className='img'/>
      <br />
      </div>
   ));
   
   return(
      <div className="sidekicks">
         <h1>Sidekick</h1>
            {dataDetails}
         </div>
   )
}

export default Sidekick;