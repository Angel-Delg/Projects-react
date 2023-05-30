import { Route, Routes } from "react-router-dom"
import { LoginPages } from "../Auth"
import { HeroesRoutes } from "../Heroes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  return (
		<Routes>
			<Route path="/login" element={ 
				<PublicRoutes>
					{/* <LoginPages /> */}
					<Routes>
						<Route path="/*" element={ <LoginPages />} />
					</Routes>
				</PublicRoutes>
			} />

			{/* Estas son las rutas Privadas */}
			<Route path="/*" element={
				<PrivateRoutes>
					<HeroesRoutes />
				</PrivateRoutes>
			}/>
		</Routes>
    )
}