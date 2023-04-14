

function OceanProfile({
    id,  
    name,
    fact1,
    fact2,
    fact3,
    image,
    learnMore,
    imageSize = 500
  }) {
    return (
      <ul>
      <section className='avatars'>
      <li key={id}>
        <h2>{name}</h2>
        </li>
        <li>
        <img
        className="avatars"
        src={image}
        alt={name}
        width={imageSize}
        height={imageSize}
        /></li>
          <li><b>Fun fact:   {fact1}</b>
          </li>
          <li><b>Fun fact:   {fact2}</b>
          </li>
          <li><b>Fun fact:   {fact3}</b>
          </li>
          <li><b>Learn more:</b>
            {learnMore}
          </li>
      </section>
      </ul>
    );
  }
 
 


 export default OceanProfile;
 