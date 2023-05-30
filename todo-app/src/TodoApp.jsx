import { FormTodo } from "./Components"
import { CardTodo } from "./Components/CardTodo"
import { useTodo } from "./Hooks"

export const TodoApp = () => {
   const { todos, onCreateTodo, onDeleteTodo, onToggleTodo, onUpdateTodo} = useTodo()

   return (
      <div className="w-full max-w-[1000px] m-auto">
         <h4 className="text-center text-white">Add a sentence in English</h4>

         <FormTodo createTodo={ onCreateTodo } />
         <div className="flex flex-wrap gap-2 justify-center">

            {
               todos.map((todo) =>  (
                  <CardTodo 
                     key={ todo.id }
                     {...todo} 
                     deleteTodo={ onDeleteTodo }
                     toggleTodo={ onToggleTodo }
                     updateTodo={ onUpdateTodo }
                  />     
               ))
            }
         </div>
      </div>
   )
}