import { createTheme } from "@mui/material/styles";
import { red, cyan, blue } from "@mui/material/colors"

export const theme = createTheme({
   palette:{
      primary: {
         main: blue[800]
      },
      secondary: {
         main: blue.A700
      },
      icons: {
         main: cyan.A100
      },
      error: {
         main: red.A700
      }
   }
})