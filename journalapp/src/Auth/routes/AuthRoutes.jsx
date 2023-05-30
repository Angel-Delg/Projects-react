import { Routes, Route, Navigate } from "react-router-dom"
import { NotFound } from "../../Journal/pages"
import { Login, Register } from "../pages"

export const AuthRoutes = () => {
   //  auth/login , auth/register
   return (
      <Routes>
         <Route path="/login" element={ <Login /> } />
         <Route path="/register" element={ <Register /> } />

         <Route path="/*" element={ <NotFound /> } />
      </Routes>
   )
}