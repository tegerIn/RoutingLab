import { useOutletContext, useParams } from "react-router-dom";
import { authors } from "../../db";

function Chapters() {
  const { name, bookTitle } = useParams();
  const bookList = authors.find((author) => author.name === name);
  const chapterList = bookList.books.find((book) => book.title === bookTitle);
  return (
    <div>
      <h3>Chapters</h3>
      <ul>
        {chapterList.chapters.map((chapter, idx) => {
          return <li key={idx}>{chapter}</li>;
        })}
      </ul>
    </div>
  );
}
export default Chapters;
