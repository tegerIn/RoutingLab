import { Link, Outlet, useParams } from "react-router-dom";

function Books() {
  const { bookTitle } = useParams();
  return (
    <div>
      <h2>{bookTitle}</h2>
      <ul>
        <li>
          <Link to="chapters">Chapters</Link>
        </li>
        <li>
          <Link to="characters">Characters</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default Books;
