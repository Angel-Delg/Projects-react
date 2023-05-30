import { ThemeProvider } from "@emotion/react"
import { theme } from "./"
import CssBaseline from "@mui/material/CssBaseline"

export const AppTheme = ({ children }) => {
   return (
      <ThemeProvider theme={ theme } >
         <CssBaseline />
         { children }
      </ThemeProvider>
   )
}