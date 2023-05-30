export const TodoSucces = () => {
   return (
      <section className="max-w-[250px] px-6 py-4 shadow-2xl shadow-green-200 rounded-lg bg-green-600">
         <section className="flex flex-col">
            <section className="flex items-center gap-2">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
               </svg>
               <h3 className="font-semibold text-white">Éxito</h3>
            </section>
            <p className="text-white font-mono">Nota Creada con exito</p>
         </section>
      </section>
   )
}