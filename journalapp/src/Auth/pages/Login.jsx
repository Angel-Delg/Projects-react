import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const Login = () => {
   return (
      <AuthLayout title="Login">
         <form>
            <Grid container alignItems="center" justifyContent="center" xs={ 12 }>
               <Grid item fullWidth mb="23px" xs={ 12 }>
                  <TextField 
                     label="Correo" 
                     type="email" 
                     required
                     placeholder="correo@gmail.com"
                     fullWidth
                     > Correo Electronico</TextField>
               </Grid>

               <Grid item fullWidth mb="23px" xs={ 12 } >
                  <TextField 
                     label="Contraseña" 
                     type="password" 
                     required
                     placeholder="Type password"
                     fullWidth 
                     > Correo Electronico</TextField>
               </Grid>

               <Grid container spacing={ 2 } sx={{ mb: "12px"}}>
                  <Grid item xs={ 12 } md={ 6 }>
                     <Button variant="contained" fullWidth> Login </Button>
                  </Grid>

                  <Grid item xs={ 12 } md={ 6 }>
                     <Button variant="outlined" fullWidth style={{ display:"flex", alignItems:"center"}}> 
                        <Google width="5px"/>
                        <Typography fontFamily="sans-serif" fontSize="0.9rem"  component="span" sx={{ marginLeft: "4px"  }}>
                           Continue 
                        </Typography>
                     </Button>
                  </Grid>
               </Grid>
               
               <Grid>
                  <Link component={ RouterLink } to="/auth/register"> Crear una cuenta</Link>                             
               </Grid>

            </Grid>
         </form>
      </AuthLayout>
   )
}