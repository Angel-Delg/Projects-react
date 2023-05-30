import { useEffect, useState } from 'react'

export const GetALLUsers = () => {
   const [allUser, setAllUsers] = useState([])
   const [error, setError] = useState('')
   const [isLoading, setIsloading] = useState(true)
 
   const handleAsyncUserFunction = () => {
      fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(users => {
         setAllUsers(users)
         setIsloading(false)
      })
      .catch(error => {
         setError(error)
      })
   }

   useEffect(() => {
      handleAsyncUserFunction()
   },[])

   return {
      allUser,
      error,
      isLoading
   }
}