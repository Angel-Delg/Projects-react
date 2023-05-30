import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const CardHeroe = ({ id, superhero, alter_ego, characters, publisher }) => {

    const urlImages = `/assets/heroes/${id}.jpg`

    return (
        <section className="rows-col-sm-12 animate__animated animate__backInDown mt-3">
            <section className="card">
                <section className="row">
                    <figure className="col-5">
                        <img className="card-img img-thumbnail " src={ urlImages } alt={ superhero } />
                    </figure>

                    <figcaption className="text-dark card-body col-7">
                        <h3 className="card-title">{ superhero }</h3>
                        <p className="card-text alert-secondary text-center rounded-3">Nombre: { alter_ego }</p>
                        <p className="card-text alert-secondary text-center rounded-3">{ publisher }</p>
                        { alter_ego !== characters && <p className="card-text alert-secondary text-center rounded-3">Personajes: { characters }</p>}
                    </figcaption>
                </section>
                <Link to={`/heroe/${id}`} className="btn btn-card btn-outline-primary m-2">More info...</Link>
            </section>
        </section>
    )
}

CardHeroe.propTypes = {
    superhero: PropTypes.string.isRequired, 
    publisher: PropTypes.string.isRequired, 
    alter_ego: PropTypes.string.isRequired, 
    characters: PropTypes.string.isRequired, 
    first_appearance: PropTypes.string.isRequired,
}