function Button() {

   function onLearnMore(){
      alert("Splish Splash!");
      }     
   return ( 
      <div>
         <button onClick={onLearnMore}>
            Learn More
         </button>
      </div>
   );
}

export default Button;