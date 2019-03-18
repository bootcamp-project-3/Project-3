import {
  Build,
  DateRange,
  DirectionsCar,
  School,
  Public,
} from "@material-ui/icons";
import General from "../../../pages/General";
import Events from "../../../pages/Events";
import Carpool from "../../../pages/CarPool";
import Equipment from "../../../pages/Equipment";
import Skills from "../../../pages/Skills";

const PageRoutes = [
  {
    path: "/general",
    sidebarName: "General",
    navbarName: "General",
    icon: Public,
    component: General,
  },
  {
    path: "/events",
    sidebarName: "Events",
    navbarName: "Events",
    icon: DateRange,
    component: Events,
  },
  {
    path: "/carpool",
    sidebarName: "Car Pool",
    navbarName: "Car Pool",
    icon: DirectionsCar,
    component: Carpool,
  },
  {
    path: "/equipment",
    sidebarName: "Equipment & Tools",
    navbarName: "Equipment & Tools",
    icon: Build,
    component: Equipment,
  },
  {
    path: "/skills",
    sidebarName: "Skills & Services",
    navbarName: "Skills & Services",
    icon: School,
    component: Skills,
  },
];

export default PageRoutes;
