import { Link, useSearchParams } from "react-router-dom";
import { authors } from "../db";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        <li key={authors[0].id}>
          <Link to={`/authors/${authors[0].name}`}>{authors[0].name}</Link>
        </li>
        <li key={authors[1].id}>
          <Link to={`/authors/${authors[1].name}`}>{authors[1].name}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
