import { heroes } from "../data"

/** 
 * @param { string } name 
 * @returns { object }
 */

export const getHeroeByName = (name = "") => {
    name = name.toLocaleLowerCase().trim()
    if(name.length === 0) return []

    return heroes.filter(({ superhero }) => {
        superhero = superhero.toLowerCase()
        return superhero.includes(name)
    })
}