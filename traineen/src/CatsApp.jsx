import { useEffect, useState } from "react"
import "./CatsApp.css"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE = 'https://cataas.com' 

export const CatsApp = () => {
    const [fact, setFact] = useState(null)   
    const [imagesUrl, setImagesUrl] = useState()

    // efecto que recupera la frase
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then( res => res.json())
        .then( message => {
            const { fact } = message
            const firstWord = fact.split(' ',4).join(' ');
            setFact( firstWord )
        })
    },[])
    // Efecto que recupera la imagen
    useEffect(() => {
        if(!fact) return

        fetch(`https://cataas.com/cat/says/${ fact }?size=50&color=red&json=true`)
        .then( res =>  res.json())
        .then( response => {
            const { url } = response
            setImagesUrl(`${CAT_PREFIX_IMAGE}${url}`)
        })

    },[fact])

    return(
        <main>
            <h3>App de gatitos</h3>
            <section>
                { fact && <p>{fact}</p> }
                { imagesUrl && 
                    <img
                        style={{ width: "300px" }}
                        src={ imagesUrl } alt={ fact }/> }
            </section>
        </main>
    )
}