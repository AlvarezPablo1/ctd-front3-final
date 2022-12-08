export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (dentist) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter(fav => {
        return fav.id === dentist.id
    });
    if (isFavOnList.length >= 0) {
        storageFavs.push(dentist)
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Se agrego a favoritos un dentista");
        return true;
    }
    else {
        alert("El dentista que selecciono ya se encuentra en favoritos");
        return false;
    }
}

export const removeFavInStorage = (id) => {
    let storageFavs = getFavFromStorage();
    const index = storageFavs.findIndex(fav => fav.id === id);
    if (index !== -1) {
        storageFavs.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Dentista eliminado de favoritos conrrectamente");
    }
}

export const isFavorited = (id) => {
    const localData = getFavFromStorage();
    const isFavOnList = localData.filter(fav => {
        return fav.id === id
    });
    return isFavOnList.length === 1;
};
