import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory, useParams } from "react-router";
import CharacterDetail from "../components/characters/CharacterDetail";
import CharactersList from "../components/characters/CharactersList";
import { RootState } from "../store";
import { fetchCharacters, clear } from "../store/characters/actions";

import Alert from "../components/common/Alert";
import { updateFavoriteCharacter } from "../store/user/actions";

const selectCharactersProps = (state: RootState) => ({
  favoriteCharacters: state.user?.user.favoriteCharacters || [],
  characters: state.characters.characters,
  loading: state.characters.charactersLoading,
  error: state.characters.charactersErrorMessage,
  prev: state.characters.prev,
  next: state.characters.next
});

const Characters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params: any = useParams();
  const charactersProps = useSelector(selectCharactersProps);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedCharacter = useMemo(
    () =>
      charactersProps.characters.find(
        (character: Character) => character.id === Number(params.id)
      ),
    [params, charactersProps.characters]
  );

  useEffect(() => {
    dispatch(fetchCharacters(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  const handleBack = () => {
    history.goBack();
  };

  const updateFavoriteStatus = (id: number) => {
    dispatch(updateFavoriteCharacter(id));
  };

  return (
    <>
      {charactersProps.loading ? (
        <>Loading</>
      ) : (
        <>
          <Alert
            message={charactersProps.error}
            display={!!charactersProps.error}
          />
          <Switch>
            <Route path="/characters" exact>
              <CharactersList
                {...charactersProps}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </Route>
            <Route path="/characters/:id" exact>
              {!!selectedCharacter ? (
                <CharacterDetail
                  goBack={handleBack}
                  character={selectedCharacter}
                  updateFavoriteStatus={updateFavoriteStatus}
                  isFavorite={charactersProps.favoriteCharacters.some(
                    (id: string) => Number(id) === selectedCharacter.id
                  )}
                />
              ) : (
                <Redirect to="/not-found-404" />
              )}
            </Route>
          </Switch>
        </>
      )}
    </>
  );
};

export default Characters;
