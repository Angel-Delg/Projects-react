import { useState } from "react"
import { FormUpdateTodo } from "./FormUpdateTodo"

export const CardTodo = ({id , description, deleteTodo, toggleTodo ,done, updateTodo}) => {

   const [update, setUpdate] = useState(false)

   if(update) return (
      <FormUpdateTodo 
         unmound={ setUpdate }
         updateTodo={ updateTodo }
         id={ id }
      />
   ) 


   return (
      <section className="flex justify-between overflow-hidden items-center animate__animated animate__fadeInUp w-full max-w-[800px] bg-purple-500/10 rounded-md relative before:absolute before:z-100  before:top-0 before:left-0 h-[70px]">
         <section className="flex items-center">
            { done ? <Checked /> : <UnChecked /> }
            <p className="font-mono text-white font-semibold ">{ description }</p>
         </section>

         <section className="flex h-full">
            <button 
               onClick={ () => deleteTodo( id ) }
               className="bg-red-600 px-6 py-1 h-full border border-red-600 hover:bg-red-700 transition-colors hover:bg-red-500/10">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="27" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" stroke-Linecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
               </svg>
            </button>

            <button 
               onClick={() => setUpdate(!update)}
               className="bg-yellow-600 px-6 py-1 h-full border border-yellow-600 hover:bg-yellow-700 transition-colors hover:bg-yellow-500/10">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="27" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
               </svg>
            </button>

            <button 
               onClick={() => toggleTodo( id)}
               className="bg-green-600 px-6 py-1 h-full border border-green-600 hover:bg-green-700 transition-colors hover:bg-green-500/10">
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-check" width="27" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokelinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M9 15l2 2l4 -4" />
               </svg>
            </button>
         </section>         
      </section>
   )
}


const Checked = () => {
   return(
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-check ml-2" width="39" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0f0" fill="none" strokeLinecap="round" strokeLinejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
         <rect x="4" y="4" width="16" height="16" rx="2" />
         <path d="M9 12l2 2l4 -4" />
      </svg>
   )
}

const UnChecked = () => {
   return(
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pin mr-3 ml-2" width="39" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#87CEEB" fill="none" strokeLinecap="round" strokeLinejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
         <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
         <line x1="9" y1="15" x2="4.5" y2="19.5" />
         <line x1="14.5" y1="4" x2="20" y2="9.5" />
      </svg>
   )
}