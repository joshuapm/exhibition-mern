interface Props {
  character: Character;
  isFavorite: boolean;
}

const CharacterCard = ({ character, isFavorite }: Props) => {
  return (
    <div className={"item-content"}>
      <h4>
        {character.name} {isFavorite ? "\u2764" : "\u2661"}
      </h4>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
