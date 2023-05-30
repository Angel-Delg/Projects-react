import { useState } from "react"
import { SideBar } from "../components"
import { NavBar } from "../components/NavBar"
import { Box } from "@mui/system"
import { Toolbar } from "@mui/material"

const drawerWidth = 260

export const JournalLayout = ({ children }) => {
   const [open, setOpen] = useState(false)

   const onOpenSideBar = () => setOpen(true)
   const onCloseSideBar = () => setOpen(false)

   return (
      <Box sx={{ display: "flex" }}>
         {/* Navbar here */}
         <NavBar 
            onOpenSideBar={ onOpenSideBar }
            drawerWidth={ drawerWidth } />
         
         <SideBar
            isOpen={ open }
            onCloseSideBar={ onCloseSideBar } 
            drawerWidth={ drawerWidth } />

         <Box
            component="main"
            sx={{ flexGrow: 1, p: 1 }}
         >
            <Toolbar />
            { children }
         </Box>
      </Box>
   )
}