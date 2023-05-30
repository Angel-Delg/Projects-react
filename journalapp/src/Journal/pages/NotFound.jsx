import { Grid, Typography } from "@mui/material"

export const NotFound = () => {
   return (
      <Grid
         width="100%"
         height="100vh" 
         container
         justifyContent="center"
         alignItems="center"
         sx={{ backgroundColor: "primary.main"}}
      >
         <Grid 
            item 
         >
            <Typography 
               variant="h2"
               sx={{color: "#fff"}}
               >Not found - 404</Typography>
            <Typography 
               sx={{color:"#fff"}}
               variant="subtitle1" textAlign="center">Error no pudimos encontrar esta ruta!!</Typography>
         </Grid>
      </Grid>
   )
}