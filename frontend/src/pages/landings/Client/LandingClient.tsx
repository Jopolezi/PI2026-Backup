// Imports 
import { ClientHero, ClientMap, ClientHow, ClientReviews } from "./sections/index"
import { ConsumerFooter } from "../../../components/common/footer/Consumer/ConsumerFooter"

export default function LandingClient() {

    return ( <> 
    <ClientHero />
    <ClientMap />
    <ClientHow />
    <ClientReviews />
    <ConsumerFooter />
    </>)
}