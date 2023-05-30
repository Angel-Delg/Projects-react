import { StarBorder } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSeleted = () => {
   return (
      <Grid  container spacing={ 0 } direction="column" alignItems="center" justifyContent="center"
         sx={{ 
            borderRadius: "20px",
            minHeight: 'calc(100vh - 100px)',
            backgroundColor: 'primary.main',
            padding: '5px'
         }}
      >
         <Grid item>
            <StarBorder sx={{ color: "white", fontSize: "3rem"}} />
         </Grid>
         <Grid item>
            <Typography
               sx={{ fontSize: "1.2rem", color: "white"}}
               >Seleccione o crea una nueva entrada</Typography>
         </Grid>
      </Grid>
   )
}