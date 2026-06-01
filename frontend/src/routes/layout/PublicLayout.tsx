// Imports
import { Outlet } from "react-router"
import { ConsumerHeader } from "../../components/layout/header"

 const PublicLayout = () => {

    return ( <>
        <ConsumerHeader />
        <Outlet />
    </>)
}

export default PublicLayout