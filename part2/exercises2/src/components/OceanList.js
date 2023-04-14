import oceans from './oceans.json';
import MoreInfo from './MoreInfo';



function OceanList() {
  const listItems = oceans.map(ocean =>
    <div key={ocean.id} className='avatars'>
      <img src={ocean.image} alt={ocean.name} />
      <li className={`${ocean.fishCheck === 'true' ? "isAFish" : "avatars"}`}>Name: <b>{ocean.name}</b></li>
      <li>"Fact": {ocean.fact1}</li>
      <li>"Fact": {ocean.fact2}</li>
      <li>"Fact": {ocean.fact3}</li>
    <MoreInfo 
      onLearnMore={() => alert("Splish Splash!")}
    />
    </div>
    );
    return <ul>{listItems}</ul>
}

export default OceanList;