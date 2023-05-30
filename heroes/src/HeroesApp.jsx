import { AuthProvider } from "./Auth"
import { AppRouter } from "./router"

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
