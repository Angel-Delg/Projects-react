import { getHeroeByPublisher } from "../helpers"
import { CardHeroe } from "./CardHeroe"
import PropTypes from "prop-types"
import { useMemo } from "react"

export const HeroeList = ({ publisher }) => {

    const heroesList = useMemo( () => {
        return getHeroeByPublisher( publisher )
    }, [publisher])

    if(!heroesList){
        return <div>Ocurrio un problema en el servidor</div>
    }

    return (
        <section className="row rows-cols-1 row-cols-md-3 animate__animated animate__fadeInRightBig">
            {
                heroesList.map( heroe => (
                    <CardHeroe 
                        key={ heroe.id}
                        {...heroe}
                    />
                ))
            }
        </section>
    )
}

HeroeList.propTypes = {
    publisher: PropTypes.string.isRequired
}