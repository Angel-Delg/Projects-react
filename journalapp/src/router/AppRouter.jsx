import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../Auth/routes/AuthRoutes"
import { JournalRoutes } from "../Journal/routes/JournalRoutes"

export const AppRouter = () => {
   return (
      <Routes>
         <Route path="/auth/*" element={<AuthRoutes /> } />
         <Route path="/*" element={<JournalRoutes /> } />
      </Routes>
   )
}