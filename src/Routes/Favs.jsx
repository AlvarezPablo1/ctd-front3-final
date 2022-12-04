import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage.service";

const Favs = () => {
  const localFavs = getFavFromStorage();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid container">
        {localFavs.length
          ? localFavs.map((dentistFav) => (
              <Card {...dentistFav} key={dentistFav.id} />
            ))
          : null}
      </div>
    </>
  );
};

export default Favs;
