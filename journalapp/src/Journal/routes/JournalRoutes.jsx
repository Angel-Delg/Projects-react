import { Navigate, Route, Routes } from "react-router-dom"
import { NotFound } from "../pages"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={ <JournalPage /> } />
         <Route path="/*" element={ <NotFound /> } /> 
      </Routes>
   )
}