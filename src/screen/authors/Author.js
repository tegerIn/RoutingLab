import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../../db";

function Author() {
  const { name } = useParams();
  const bookList = authors.find((author) => author.name == name);
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {bookList.books.map((book) => {
          return (
            <li key={book.no}>
              <Link to={book.title}>{book.title}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
export default Author;
