import { useForm } from "../Hooks"
import JSConfetti from "js-confetti"
import 'animate.css'

export const FormTodo = ({ createTodo }) => {
   

   const jsconfetti = new JSConfetti()
   const { description, onHandleChange, onResetForm } = useForm({
      description: ''
   })

   const onSubmitForm = event => {
      event.preventDefault();
      if(description.length < 3) return
      createTodo( description )
      onResetForm()
      jsconfetti.addConfetti({
         emojiSize: 100  
      })
   }

   return (
      <form
         onSubmit={ onSubmitForm }
         className="flex flex-col items-center p-10 animate__animated animate__fadeInDownBig">
         
         <input
            onChange={ onHandleChange }
            name="description"
            value={description}
            className="m-2 w-full max-w-[300px] bg-gray-100 text-start py-2 pl-10 pr-4 rounded-lg outline-none"
            placeholder="Type your todo"
        />
         <button
            data-button="confetti"
            className="w-full max-w-[200px] py-2 px-6 text-center text-purple-600 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-purple-500/10 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-purple-600 after:scale-125 hover:after:opacity-100 hover:after:scale-100">
            CreateTodo
         </button>
      </form>
   )
}