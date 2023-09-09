import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Rudraksha India is now fast becoming a one-stop destination for Spiritual Products and Holistic Healing Services. We supply authentic and genuine high-quality Spiritual Products like Rudraksha, Gemstones, Yantra, Sculpture of Gods / Goddesses, Puja, and Meditation accessories along with Spiritual Holy books."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
