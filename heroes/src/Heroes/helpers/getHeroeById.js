import { heroes } from "../data"
/**
 * 
 * @param { number } id 
 * @returns { Object }
 */

export const getHeroeById = id => {
    return heroes.find( heroe => heroe.id === id)
}
