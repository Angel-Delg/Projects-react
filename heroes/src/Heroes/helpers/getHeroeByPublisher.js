import { heroes } from "../data"

export const getHeroeByPublisher = publisher  => {
    const validPublisher = ['DC Comics','Marvel Comics']
    if(!validPublisher.includes( publisher )) throw new Error(`${publisher} not valid!!`)

    return heroes.filter(heroe => heroe.publisher === publisher )
}