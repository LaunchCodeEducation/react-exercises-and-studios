export default function BookList() {
   let pageTitle = "Children Books";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnh9dCYH4Cm5c6NYGSo93pvY6IDLGNJ7tfDw&usqp=CAU;"
   let book2 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDGVGBwzcm2cCswJ43AXotE1iO6cw36Hv_SIP3A_4HguJlpHfYinVc0oWjYpg1tmO1fWnExNFmSTYrGFsH6P-PjBdpecB992YS91rZ8XxzVEh_8sL3w7Gf7A"
   let book3 = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTHChTvmPd-DHm4jsukDk3pSQK4lUuq48G9XHYaUfc-kRDUseZ4Qh1GLcYR7O9s6-tiAmmuYlkNS6NOuXzbhop1rFtKZhB8o0yVrtdIOk&usqp=CAc"
   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Diary of a Wimpy Kid" />
         <img src={book2} alt="The Giving Tree" />
         <img src={book3} alt="Broken Crayons Still Color" />
      </div>      
   );
}