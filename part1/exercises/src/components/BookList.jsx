export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/418i5zaX2TL._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51WTYfWgfSL._SY445_SX342_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51xrYUOgKkL._SY445_SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Enemy by Lee Child" />
         <img src={book2} alt="Fariy Tale by Stephen King" />
         <img src={book3} alt="Evidence of the Old World by Jon Levi and David Edward" />
      </div>      
   );
}