import { characters } from "../data";
import { Link } from "react-router-dom";

export default function Characters(props) {
  return (
    <div>
      <h1>דמויות</h1>

      <ul>
        {characters.map((c) => (
          <li key={c.id}>
            <Link to={`/characters/${c.id}`}>
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
