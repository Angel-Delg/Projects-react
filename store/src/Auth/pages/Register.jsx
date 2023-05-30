import { useForm } from "../../Hooks";
import { AddNewUser } from "../Data/AddNewUser";

export const Register = () => {
      
   const { email, username, password, onChange, onReset, formState} = useForm({
      username: '',
      email: '',
      password: ''
   })

   const onSubmitUser = (event) => {
      event.preventDefault();
      if(!username) return
      if(!email) return
      if(!password) return

      AddNewUser(formState)
      onReset()
   }
   
   return (
      <form 
         onSubmit={onSubmitUser}
         style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto", }}>
         
         <label htmlFor="username">
            Username
            <input id="username" onChange={onChange} type="text" name="username" value={ username } required/>
         </label>

         <label htmlFor="email">
            Email
            <input id="email" onChange={onChange} type="email" name="email" value={ email } required/>
         </label>

         <label htmlFor="password">
            Password
            <input id="password" onChange={onChange} type="password" name="password" value={password} required />
         </label>
         <button>Registrase</button>
      </form>
   )
}