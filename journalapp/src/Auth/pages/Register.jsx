import { Link as RouterLink } from "react-router-dom"
import { Grid, TextField ,Link, Button } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const Register = () => {
   return (
      <AuthLayout title="Register">
         <form>
            <Grid container alignItems="center" justifyContent="center" >
               <Grid item fullWidth mb="23px" xs={ 12 }>
                  <TextField 
                     label="Nombre" 
                     type="text" 
                     required
                     placeholder="Type your name"
                     fullWidth 
                     > Correo Electronico</TextField>
               </Grid>
               
               
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
                  <Grid item xs={ 12 }>
                     <Button variant="contained" fullWidth> Registrase </Button>
                  </Grid>
               </Grid>
               
               <Grid>
                  <Link component={ RouterLink } to="/auth/login"> Ya tienes una cuenta ?</Link>                             
               </Grid>
            </Grid>
         </form>
      </AuthLayout>
   )
}