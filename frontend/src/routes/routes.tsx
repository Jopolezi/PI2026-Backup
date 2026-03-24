import { createBrowserRouter } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"

// Pages
import LandingClient from "@/pages/landings/Client/LandingClient"
import LandingEnterprise from "../pages/landings/Enterprise/LandingEnterprise"

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
    }
])

export default routes