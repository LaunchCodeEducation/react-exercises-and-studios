export default function HobbyLinks() {
    let pageTitle = "MyHobbies";
          let HobbyLinks = ["https://www.gardendesign.com/how-to/", "https://www.verywellmind.com/how-spirituality-can-benefit-mental-and-physical-health-3144807","https://www.youtube.com/watch?v=zhI7bQyTmHw",];
          return (
          <div>
             <h3>{pageTitle}</h3>
             <a href = {HobbyLinks[0]}>"gardening"</a>
             <a href = {HobbyLinks[1]}>"spirituality"</a>
             <a href = {HobbyLinks[2]}>"cooking"</a>
             
          </div>  
       );
          };