import { Navbar } from "../../UI"
import { Route, Routes, Navigate } from "react-router-dom"
import { 
    DcPages, 
    MarvelPage,
    SearchPage,
    Heroe
} from "../Pages"

export const HeroesRoutes = () => {

    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/marvel" element={ <MarvelPage />} />
                    <Route path="/dc"  element={ <DcPages />} /> 
                    
                    <Route path="/search"  element={ <SearchPage />} /> 
                    <Route path="/heroe/:id"  element={ <Heroe />} /> 
                    
                    <Route path="/"  element={ <Navigate to="/marvel" />} />
                </Routes>
            </div>

        </>
    )
}