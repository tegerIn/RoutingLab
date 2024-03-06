import { useOutletContext, useParams } from "react-router-dom";
import { authors } from "../../db";

function Characters() {
  const { name, bookTitle } = useParams();
  const bookList = authors.find((author) => author.name === name);
  const characterList = bookList.books.find((book) => book.title === bookTitle);
  return (
    <div>
      <h3>Characters</h3>
      <ul>
        {characterList.characters.map((character, idx) => {
          return <li key={idx}>{character}</li>;
        })}
      </ul>
    </div>
  );
}
export default Characters;
