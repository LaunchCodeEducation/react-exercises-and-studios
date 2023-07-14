export default function BookList() {
   let pageTitle = "Rainbow";
   let book1 = "https://m.media-amazon.com/images/I/51NZP320M7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/410pHRqId-L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51v4HwytF1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The wild truth" />
         <img src={book2} alt="Good morning monster" />
         <img src={book3} alt="The Road Less STUPID" />
      </div>      
   );
}