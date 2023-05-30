import { TypesReducer } from "../../../src/Auth/types"

describe("Test in TypesReducer", () => {

   test('Types de types', () => {
      expect(TypesReducer).toEqual({
         login: '[Auth] Login',
         logout: '[Auth] Logout'
      })

   })
})