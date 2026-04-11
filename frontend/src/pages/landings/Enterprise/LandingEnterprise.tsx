// Imports
import { BusinessHeader } from "@/components/common/header";
import {
  BusinessHero,
  BusinessHighlight,
  BusinessSystem,
  BusinessExperience,
  BusinessSegments,
  BusinessPlans
} from "./sections";
import { BusinessFooter } from "../../../components/common/footer/Business/BusinessFooter";

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
