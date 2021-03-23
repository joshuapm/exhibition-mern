interface Props {
  character: Character;
  isFavorite: boolean;
  goBack: () => void;
  updateFavoriteStatus: (id: number) => void;
}

const CharacterDetail = ({
  character,
  isFavorite,
  goBack,
  updateFavoriteStatus
}: Props) => {
  return (
    <div className="detail-container">
      <div className="detail">
        <div>
          <img
            style={{ width: "100%" }}
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className="detail-content">
          <h3>{character.name}</h3>

          <ul>
            <li>Status: {character.status}</li>
            <li>Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
          </ul>

          <div className="nav-buttons-column">
            <button
              onClick={() => updateFavoriteStatus(character.id)}
              className={isFavorite ? "secondary-button" : "primary-button"}
              style={{ marginBottom: "1rem" }}
            >
              {isFavorite ? "- Remove from Favorites" : "+ Add to Favorites"}
            </button>

            <button onClick={goBack} className="secondary-button">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
