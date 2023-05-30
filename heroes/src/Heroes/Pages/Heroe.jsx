import { useParams, useNavigate } from "react-router-dom"
import { getHeroeById } from "../helpers"
import { useCallback, useMemo } from "react"

export const Heroe = () => {

    const Navigate = useNavigate()
    const params = useParams()
    const { id } = params

    const onBackNavigate = useCallback( () =>  {
        Navigate(-1)
    },[id])


    const urlImages = `/assets/heroes/${id}.jpg`
    // Aqui reciviriamos el objeto del heroe encontrado
    const heroe = useMemo( () => getHeroeById(id),[id])

    if(!heroe){
        return <Navigate to="/marvel" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        characters,
        first_appearance
    } = heroe

    return (
        <div className="row mt-2 animate__animated animate__lightSpeedInLeft">
            <div className="col-4">
                <img 
                    src={ urlImages }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__rubberBand"
                />
            </div>
            <div className="col-8">
                <h3>{ superhero } - { characters }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>First Appearance: </b>{ first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button
                    onClick={ onBackNavigate } 
                    className="btn btn-outline-success"
                >
                Regresar</button>
            </div>
        </div>
    )
}