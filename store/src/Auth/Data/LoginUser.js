import { useState } from "react"

export const LoginUser = () => {
   const [token, setToken] = useState('')
   const [isLoading, setIsloading] = useState(true)
   const [error, setError] = useState('')

   const Login = (data) => {
      fetch('https://fakestoreapi.com/auth/login',{
         method:'POST',
         body:JSON.stringify(data)
      })
      .then(res =>res.json())
      .then(json => {
         setToken(json)
         setIsloading(false)
      })
      .catch(error => {
         setError(error)
      })
   }

   const Logout = () => {
      setToken(null)
      setError(null)
   }

   return {
      token, 
      isLoading,
      error,
      Login,
      Logout
   }
}