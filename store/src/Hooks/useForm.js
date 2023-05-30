import { useState } from "react"

export const useForm = (initialForm = {}) => {

   const [formState, setFormState] = useState(initialForm)

   const onChange = ({ target: { value, name } }) => {
      setFormState({
         ...formState,
         [name]: value
      })
   }
   const onReset = () => setFormState(initialForm)
   
   return {
      formState,
      ...formState,
      onChange,
      onReset
   }
}