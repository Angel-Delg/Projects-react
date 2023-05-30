import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/Auth"
import { PublicRoutes } from "../../src/router/PublicRoutes"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { MarvelPage } from "../../src/Heroes/Pages/MarvelPage"

describe("Pruebas en las rutas publicas" , () =>  {
   test("Debe mostrar los children", () => {

      const contextValue = {
         logged: false
      }

      render(
         <AuthContext.Provider value={ contextValue }>
            <PublicRoutes>
               <h3>Estas desconectado...</h3>
            </PublicRoutes>
         </AuthContext.Provider>
      )

      expect(screen.getByText('Estas desconectado...')).toBeTruthy()
      screen.debug()
   })

   test("Debe navegar si estas autenticado", () =>  {

      const contextValue = {
         logged: true,
         user: {
            id: "1223",
            name: "Strake"
         }
      }

      // Pruebas de como comprobar rutas privadas usando jest
      render(
         <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login']}>
               <Routes>
                  <Route path="/login" element={
                     <PublicRoutes>
                        <h3>Rutas Publicas...</h3>
                     </PublicRoutes>
                  }/>
                  <Route path="/marvel" element={ <MarvelPage /> } />
               </Routes>
            </MemoryRouter>
         </AuthContext.Provider>
      )
      expect(screen.getByText('Heroes Marvel')).toBeTruthy()

      screen.debug()
   })
})