import { Home, Inbox, AccountBox } from "@material-ui/icons";
import Bulletin from "../../../pages/Bulletin";
import InboxPage from "../../../pages/InboxPage";

const Routes = [
  {
    path: "/bulletin",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Home,
    component: Bulletin,
  },
  {
    path: "/inbox",
    sidebarName: "Inbox",
    navbarName: "Inbox",
    icon: Inbox,
    component: InboxPage,
  },
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "Profile",
    icon: AccountBox,
    component: InboxPage,
  },
];

export default Routes;
