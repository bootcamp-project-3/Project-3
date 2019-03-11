import { Mail, Favorite, BusinessCenter } from "@material-ui/icons";
import TermsOfService from "../../../pages/TermsOfService";
import ThankYou from "../../../pages/ThankYou";
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
  {
    path: "/thank-you",
    sidebarName: "Thank You",
    navbarName: "Thank You",
    icon: Favorite,
    component: ThankYou,
  },
];

export default AltRoutes;
