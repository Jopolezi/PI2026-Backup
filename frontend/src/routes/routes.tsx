import { createBrowserRouter } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"

// Pages
import LandingClient from "@/pages/landings/Client/LandingClient"
import LandingEnterprise from "../pages/landings/Enterprise/LandingEnterprise"

// Access 
import { Login } from "../pages/access/login/Login"
import { Register } from "../pages/access/register/Register"

const routes = createBrowserRouter([
    {
        element: ( <PublicLayout/> ),
        children: [
            {
                index: true,
                element:
                ( <> <LandingClient/> </>)
            }
        ],
        path: "/"
    },
    {
        element: ( <LandingEnterprise/> ),
        path: "/empresas"
    },
    {
        element: ( <Login />),
        path: "/entrar"
    },
    {
        element: ( <Register />),
        path: "/cadastrar"
    }
])

export default routes