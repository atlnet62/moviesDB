import { promiseType } from "../types/types";

export async function getFilms(url: string): Promise<promiseType> {
    return await fetch(url).then(response => response.json() as Promise<promiseType>);
}  