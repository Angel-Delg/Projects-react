import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../Auth"

export const PublicRoutes = ({children}) => {
	const { logged } = useContext(AuthContext)
	
	return (!logged)
	? children 
	: <Navigate to="/marvel" />
}