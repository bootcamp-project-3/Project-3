import { Mail, BusinessCenter } from "@material-ui/icons";
import TermsOfService from "../../../pages/TermsOfService";
import ContactUs from "../../../pages/ContactUs";

const AltRoutes = [
  {
    path: "/termsofservice",
    sidebarName: "Terms Of Service",
    navbarName: "Terms Of Service",
    icon: BusinessCenter,
    component: TermsOfService,
  },
  {
    path: "/contact-us",
    sidebarName: "Contact Us",
    navbarName: "Contact Us",
    icon: Mail,
    component: ContactUs,
  },
];

export default AltRoutes;
