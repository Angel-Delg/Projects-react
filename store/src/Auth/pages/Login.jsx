import { useForm } from "../../Hooks";
import { LoginUser } from "../Data/LoginUser";

export const Login = () => {

   const { Login, Logout, token } = LoginUser()

   const { username, password, onChange, onReset, formState} = useForm({
      username: '',
      password: ''
   })

   const onSession = (event) => {
      event.preventDefault();
      if(!username) return
      if(!password) return

      Login(formState)
      onReset()
   }
   
   return (
      <form 
         onSubmit={onSession}
         style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto", }}>
         
         <label htmlFor="username">
            Username
            <input id="username" onChange={onChange} type="text" name="username" value={ username } required/>
         </label>

         <label htmlFor="password">
            Password
            <input id="password" onChange={onChange} type="password" name="password" value={password} required />
         </label>
         <button>Login</button>
      </form>
   )
}