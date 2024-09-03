import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorites(id) {
    setFavoriteMealIds((prev) => [...prev, id]);
  }
  function removeFavorites(id) {
    setFavoriteMealIds((prev) => prev.filter((el) => el !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorites,
    removeFavorites,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
