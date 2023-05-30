export const TodoDelete = () => {
   return (
      <section className="max-w-[270px] px-6 py-4 shadow-2xl shadow-red-200 rounded-lg bg-red-600">
         <section className="flex flex-col">
            <section className="flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
               </svg>
               <h3 className="font-semibold text-white">Éxito</h3>
            </section>
            <p className="text-white font-mono">Nota Eliminada con exito</p>
         </section>
      </section>
   )
}