import { useParams } from "react-router-dom";
import { characters } from "../data";

const CharacterDetails = () => {
  const { id } = useParams();

  const character = characters.find(
    (c) => c.id === parseInt(id)
  );

  if (!character) {
    return <p>דמות לא נמצאה</p>;
  }

  const textColor = {
    color: character.side === "Dark" ? "red" : "blue"
  };

  return (
    <div style={textColor}>
      <h1>{character.name}</h1>
      <p>Role: {character.role}</p>
      <p>Side: {character.side}</p>
    </div>
  );
};

export default CharacterDetails;
