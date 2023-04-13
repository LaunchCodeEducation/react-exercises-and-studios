import './OceanTable.module.css';
import ocean from './oceans.json';


function OceanTable() {
   return(
      <div>
      <table>
        <tr>
         <th></th>
          <th>Name</th>
          <th>Fun Fact 1</th>
          <th>Fun Fact 2</th>
          <th>Fun Fact 3</th>
        </tr>
        {ocean.map((val, key) => {
          return (
            <tr key={key}>
              <td><img src = {val.image} alt="ocean creature" /></td>
              <td className='tableHeader'><b>{val.name}</b></td>
              <td>{val.fact1}</td>
              <td>{val.fact2}</td>
              <td>{val.fact3}</td>
            </tr>
          )
        })}
      </table>
    </div>
   )
}

export default OceanTable;

//GOALS - table only has pictures
//BANNER - holds instructions
//Click on image and have fun facts pop up in alert (randomly???)