import oceans from './oceans.json'
import Button from './Button';

function OceanProfile(){

  const listItems = oceans.map(ocean =>
    <div key={ocean.id}  className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      
      <img src={ocean.image} alt={ocean.name} className="img"/>
      
      <h1><b>{ocean.name}</b></h1>
      
      <h3><i>Fun Facts!</i></h3>
      <ul>
        <li>{ocean.fact1}</li>
        <li>{ocean.fact2}</li>
        <li>{ocean.fact3}</li>
      </ul>
      
      <div>
        <Button />
      </div>
    
    </div>
  );
    
  return( 
    <ul>
      {listItems}
    </ul>
  );
}

export default OceanProfile;
 