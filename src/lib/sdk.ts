// @ts-nocheck

let baseUrl;

export const setBaseUrl = (url) => {
    baseUrl = url;
};

export const getFavorites = async () => {
    const response = await fetch(`${baseUrl}/favorites`);
    const json = await response.json();
    return json.favorites;
};

export const getFavorite = async (id) => {
    const response = await fetch(`${baseUrl}/favorites/${id}`);
    const json = await response.json();
    return json.favorite;
};

export const addFavorite = async (name, url) => {
    const response = await fetch(`${baseUrl}/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url }),
    });

    const json = await response.json();
    return json.id;
};

export const deleteFavorite = async (id) => {
    const response = await fetch(`${baseUrl}/favorites/${id}`, {
        method: 'DELETE',
    });
    return response.status;
};

export const replaceFavorite = async (id, newFav) => {
    const response = await fetch(`${baseUrl}/favorites/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFav),
    });

    return response.status;
};
