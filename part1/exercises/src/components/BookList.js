export default function BookList() {
   let pageTitle = "Books I Want To Read Again";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg";
   let book2 = "https://th.bing.com/th/id/OIP.FaZWDEi9ifwVY_jl99pn6AHaLY?pid=ImgDet&rs=1";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/e/e4/5th_Wave_Book_Cover.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Hunger Games, Book 1 of the Triology" style={{width:'200px',height:'auto'}}/>
         <img src={book2} alt="Under the Skin" style={{width:'200px',height:'auto'}} />
         <img src={book3} alt="5th Wave, book 1 of the Triology" style={{width:'200px',height:'auto'}} />
      </div>      
   );
}