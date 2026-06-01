// Imports
import { BusinessHeader } from "@/components/layout/header";
import {
  BusinessHero,
  BusinessHighlight,
  BusinessSystem,
  BusinessExperience,
  BusinessSegments,
  BusinessPlans
} from "./sections";
import { BusinessFooter } from "../../../components/layout/footer/Business/BusinessFooter";

export default function LandingEnterprise() {
  return (
    <>
      <BusinessHeader />
      <BusinessHero />
      <BusinessHighlight />
      <BusinessSystem />
      <BusinessExperience />
      <BusinessSegments />
      <BusinessPlans />
      <BusinessFooter />
    </>
  );
}
