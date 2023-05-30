import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import { AuthContext } from "../../src/Auth"
import { PrivateRoutes } from "../../src/router"

describe("Pruebas en las rutas privadas", () => {
   test('Debe mostrar las children si esta autenticado', () =>  {
      const contextValue = {
         logged: true,
         user: {
            id: "12233",
            name: 'Carlos'
         }
      }
      render(
         <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
               <PrivateRoutes>
                  <h3>Esta en las rutas privadas</h3>
               </PrivateRoutes>
            </MemoryRouter>
         </AuthContext.Provider>
      )
 
      screen.debug()
   })
})