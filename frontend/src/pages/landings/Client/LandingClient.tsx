// Imports 
import { ClientHero, ClientMap, ClientHow, ClientReviews } from "./sections/index"
import { ConsumerFooter } from "../../../components/layout/footer/Consumer/ConsumerFooter"

export default function LandingClient() {

    return ( <> 
    <ClientHero />
    <ClientMap />
    <ClientHow />
    <ClientReviews />
    <ConsumerFooter />
    </>)
}