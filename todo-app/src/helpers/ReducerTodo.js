import { Types } from "./"

export const ReducerTodo = (state, action) => {

   switch (action.type) {

      case Types.Create:
         return [action.payload, ...state]
      
      case Types.Delete:
         return state.filter(({ id }) =>  id !== action.payload)
      
      case Types.Update:
         return state.map((todo) => {
            if(todo.id === action.payload.id){
               return {
                  ...todo,
                  description:  action.payload.newDescription
               }
            }

            return todo
         })

      case Types.ToggleDone:
         return state.map( todo => {
            if(todo.id === action.payload){
               return {
                  ...todo,
                  done: !todo.done
               }
            }
            return todo
         })

      default:
         return state
   }
}