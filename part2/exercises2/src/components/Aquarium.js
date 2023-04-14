import OceanProfile from './components/OceanProfile.js';
import oceans from './oceans.json'

function Aquarium() {
   return (
      <ul>
         <li key={oceans.id}>
         <OceanProfile 
            image={oceans.image}
            name={oceans.name}
            fact1={oceans.fact1}
            fact2={oceans.fact2}
            fact3={oceans.fact3}
            learnMore={oceans.learnMore}
         />
         </li>
      </ul>
   )
}

export default Aquarium;