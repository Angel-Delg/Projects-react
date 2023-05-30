import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context"

export const LoginPages = () => {
    const { Login } = useContext(  AuthContext )
    const navigate = useNavigate()
    
    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/'
        
        Login('Angel Lopez')        
        navigate( lastPath ,{
            replace: true
        })
    }

    return (
        <section className="container m-5 animate__animated animate__slideInDown">
            <h1>Login</h1>
            <button 
                onClick={ onLogin }
                className="btn btn-primary">
                login   
            </button>
        </section>
    )
}