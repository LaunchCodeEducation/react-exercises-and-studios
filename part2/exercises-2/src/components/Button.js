import './styles.css';

function Button() {
   function onLearnMore(){
      alert("Woosh!");
   }
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;