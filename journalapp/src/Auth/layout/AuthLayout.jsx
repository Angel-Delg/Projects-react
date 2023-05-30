import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = ""  }) => {
   return (
      <Grid  container spacing={ 0 } direction="column" alignItems="center" justifyContent="center"
         sx={{ 
            minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: '10px'
         }}
      >

         <Grid item width="340px" className="box-shadow" alignItems="center" justifyContent="center" xs={ 3 }
            sx={{ 
               background: "white",
               padding: 3,
               borderRadius: 2
            }}
         >
            <Typography textAlign="center" component="h2" variant="h5"
               sx={{
                  fontWeight: 'bold',
                  mb: 5
               }}
            >
               { title }
            </Typography>

            { children }

         </Grid>
      </Grid>
   )
}