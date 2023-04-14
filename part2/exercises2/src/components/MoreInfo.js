import Button from './Button.js' 

function MoreInfo({onLearnMore}) {
   return ( 
      <div>
         <Button onClick={onLearnMore}>
            Learn More
         </Button>
      </div>
   );
}

export default MoreInfo;