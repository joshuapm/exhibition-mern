import { useHistory } from "react-router-dom";
import CharacterCard from "../characters/CharacterCard";

interface Props {
  favoriteCharacters: string[];
  characters: Character[];
  currentPage: number;
  setCurrentPage: Function;
  next: boolean;
  prev: boolean;
  loading: boolean;
}

const CharactersList = ({
  favoriteCharacters,
  characters,
  currentPage,
  setCurrentPage,
  next,
  prev,
  loading
}: Props) => {
  const history = useHistory();

  return (
    <div>
      <ul className={"characters-list"}>
        {characters.map((character: Character) => (
          <li
            key={character.id}
            className={"item"}
            onClick={() => history.push(`/characters/${character.id}`)}
          >
            <CharacterCard
              character={character}
              isFavorite={favoriteCharacters.some(
                (characterId: string) => characterId === character.id.toString()
              )}
            />
          </li>
        ))}
      </ul>

      <div className={"nav-buttons"}>
        {prev && (
          <button
            disabled={loading}
            className={"secondary-button"}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            PREV
          </button>
        )}
        {next && (
          <button
            disabled={loading}
            className={"primary-button"}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default CharactersList;
