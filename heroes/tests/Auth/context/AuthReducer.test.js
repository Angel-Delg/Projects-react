import { AuthReducer } from "../../../src/Auth/context/AuthReducer"
import { TypesReducer } from "../../../src/Auth/types"

describe("test in AuthReducer", () => {
   const initialState = {logged: false}

   test("Debe retornar el estado por defecto", () => {
      const state = AuthReducer( initialState, {} )
      const { logged } = state 
      expect( logged ).toBeFalsy()

   })
   test("Debe cambiar el state", () => {
      const action = {
         type: TypesReducer.login,
         payload: { id: 'ABC', name: 'Carlos'}
      }
      const state = AuthReducer( initialState , action)
      expect( state ).toEqual({
         logged: true,
         user: expect.any(Object)
      })
   })

   test("Debe cambiar el estado a false", () =>  {
      const action = {
         type: TypesReducer.logout,
      }
      const state = AuthReducer( initialState, action )
      const { logged } = state
      expect( logged ).toBeFalsy()
   })
})