import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Please provide your details below. Our representative will contact you shortly after receiving your request.."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
