import { GetALLUsers } from "./Auth/Data/GetALLUsers"
import { Login } from "./Auth/pages/Login"

export const StoreApp = () => {

   const { allUser, isLoading } = GetALLUsers()   

   console.log(allUser)

   return (
      <main>
         <h2>Register Users</h2>

         {

            isLoading 
            ? <h2>Cargando Usuarios</h2>
            : allUser.map((user, index) => (
               <h4 key={index}>{user.email}</h4>
            ))
         }
   
         {/* <Register/> */}

         <Login />

      </main>
   )
}