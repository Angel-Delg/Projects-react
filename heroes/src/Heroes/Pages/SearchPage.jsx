import { CardHeroe } from "../components"
import { useLocation,useNavigate } from "react-router-dom"
import { useForm } from "../hooks"
import { getHeroeByName } from "../helpers"
import queryString from "query-string"

export const SearchPage = () => {

    // Location and navigate 
    const navigate = useNavigate()
    const location = useLocation()
    const query  =  queryString.parse( location.search )
    const [ q ] = Object.values( query )

    const heroes = getHeroeByName(q)
    
    const { formState, onHandleChanges, onResetForm } = useForm({
        searchText: ''
    })    
    const { searchText } = formState

    const onFormSubmit = e => {
        e.preventDefault();
        if(searchText.length < 3) return
        
        navigate(`?=${searchText.toLowerCase()}`)
        onResetForm()
    }
    
    return (
        <>
            <h1 className="animate__animated animate__slideInDown">Search a Heroe</h1>
            <hr />
            
            <section className="row rows-cols-2 row-cols-md-2 g-3">

                 <div>
                    <h3>Heroes App</h3>
                    <hr />
                    <form
                        onSubmit={ onFormSubmit } 
                        className="form form-control-plaintext animate__animated animate__slideInDown">
                        <input
                            onChange={ onHandleChanges }
                            placeholder="search a heroe"
                            name="searchText"
                            autoComplete="off"
                            className="form-control" 
                            type="text"
                            value={ searchText }
                        />

                        <button 
                            className="btn btn-outline-primary mt-3">
                            search
                        </button>
                    </form>
                </div>

                <div className="row-col-sm-11">
                    <h3>Results</h3>
                    <hr />

                {
                    heroes.map(( hero ) => (
                        <CardHeroe 
                            key={ hero.id }
                            {...hero}
                        /> 
                    ))
                }
                </div>
            </section>
        </>
    )
}