import { Card } from "./class/card.class.js";
import { getFilms } from "./api/moviedb.api.js";
import { config } from "./config/index.js";
import { filmType } from "./types/types.js";

export default async function init() {
    const list:filmType[] = await getFilms(`https://api.themoviedb.org/3/trending/movie/week?api_key=${config.API_KEY}&language=fr-FR`).then(
        response => response.results)

    list.map((movie) => {
        new Card(".movie-container", ".card", movie).createCard();
    });
}
