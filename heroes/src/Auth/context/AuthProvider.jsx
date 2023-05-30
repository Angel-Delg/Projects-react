import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"
import { TypesReducer } from "../types"

const init = () =>{
	const user = JSON.parse( localStorage.getItem('user') );

	return {
		logged: !!user,
		user: user,
	}
}

export const AuthProvider = ({ children }) => {
	const [ authState, dispatch ] = useReducer( AuthReducer,{}, init )

	const Login = (name = '') =>  {
		const user = { id: 'ABC', name }

		const action = { type: TypesReducer.login, payload: user }
		localStorage.setItem('user', JSON.stringify( user ) );
		dispatch(action);
	}

	const Logout = () => {
		const action = {
			type: TypesReducer.logout
		}
		
		dispatch(action)
		localStorage.removeItem('user')
	}

	return (
		<AuthContext.Provider value={ { Login, Logout, ...authState } }>
			{ children }
		</AuthContext.Provider>
	)
}