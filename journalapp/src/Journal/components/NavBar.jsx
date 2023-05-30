import { LogoutOutlined, MenuOutlined, StarBorder } from "@mui/icons-material/"
import { AppBar, Grid, IconButton, Toolbar, Typography, useMediaQuery} from "@mui/material/"

export const NavBar = ({ drawerWidth, onOpenSideBar  }) => {

   const isDestok = useMediaQuery('(min-width:760px)')

   return (
      <AppBar 
         position="fixed" 
         sx={{
            width: isDestok ? `calc(100% - ${ drawerWidth }px) ` : "100%"
         }}
      >
         <Toolbar>
            <IconButton
               onClick={ onOpenSideBar }
               color="inherit"
               edge="end"
               sx={{ mr: 2, display: isDestok && 'none' }}
            >
               <MenuOutlined />
            </IconButton>
            
            <Grid 
               container
               direction="row"
               justifyContent="space-between"
               alignItems="center"
            >
               <Typography sx={{ display: "flex", alignItems: "center"}}>
                  <StarBorder/>
                  JournalApp
               </Typography>
               <IconButton color="icons">
                  <LogoutOutlined/>
               </IconButton>
            </Grid>
         </Toolbar>
      </AppBar>
   )
}