import { useEffect, useReducer } from "react"
import { ReducerTodo } from "../helpers"
import { Types } from "../helpers"

const init = () => {
   if(JSON.parse(localStorage.getItem('talks'))){
      return JSON.parse(localStorage.getItem('talks'))
   }
   return []
}

export const useTodo = () => {
   const [todos, dispatch] = useReducer(ReducerTodo, [], init)

   useEffect(() => {
      localStorage.setItem('talks', JSON.stringify(todos))
   },[todos])

   const onCreateTodo = ( description ) => {
      const action = {
         type: Types.Create,
         payload: {
            id: crypto.randomUUID(),
            description, 
            done: false
         }
      }
      dispatch(action)
   }

   const onDeleteTodo = ( id ) => {
      const action = {
         type: Types.Delete,
         payload: id
      }
      dispatch(action)
   }

   const onToggleTodo = ( id ) => {
      const action = {
         type: Types.ToggleDone,
         payload: id
      }
      dispatch(action)
   }

   const onUpdateTodo = (id, newDescription) => {
      const action = {
         type: Types.Update,
         payload: {
            id,
            newDescription
         }
      }
      dispatch( action )
   }

   return {
      todos,
      onCreateTodo,
      onDeleteTodo,
      onToggleTodo,
      onUpdateTodo
   }
}