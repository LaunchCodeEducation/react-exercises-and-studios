import oceans from './oceans.json';

function Button({ onClick, children, learnMore}) {
   return (
     <button onClick={onClick}>
       {children}
       {oceans.learnMore}
     </button>
   );
 }

 export default Button;