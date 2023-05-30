import { useForm } from "../Hooks";

export const FormUpdateTodo = ({ unmound, updateTodo, id }) => {

   const { description, onHandleChange, onResetForm } = useForm({
      description: ''
   })

   const onSubmitForm = event => {
      event.preventDefault();
      if(description.length < 3) return
      
      updateTodo(id, description)
      onResetForm()
      unmound()
   }

   return (
      <form
         onSubmit={ onSubmitForm }
         className="flex flex-col rounded-lg items-center p-10 animate__animated animate__fadeInDownBig bg-slate-700/20">
         <h3 className="font-semibold m-0 p-2 text-white bg-purple-200/10 rounded-md">Update sentence</h3>
         <input
            onChange={ onHandleChange }
            name="description"
            value={description}
            className="m-2 w-full max-w-[300px] bg-gray-100 text-start py-2 pl-10 pr-4 rounded-lg outline-none"
            placeholder="Update your todo"
        />
         <button
            onTou
            className="w-full max-w-[200px] py-2 px-6 text-center text-yellow-600 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-yellow-500/10 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-yellow-600 after:scale-125 hover:after:opacity-100 hover:after:scale-100">
            Update Todo
         </button>
      </form>
   )
}