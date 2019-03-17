import { Mail, BusinessCenter,Face } from "@material-ui/icons";
import TermsOfService from "../../../pages/TermsOfService";
import ContactUs from "../../../pages/ContactUs";
import AboutUS from "../../../pages/AboutUs";

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
  {
    path: "/AboutUS",
    sidebarName: "About Us",
    navbarName: "About Us",
    icon: Face,
    component: AboutUS,
  }, 
];

export default AltRoutes;
