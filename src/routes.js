/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import ShowChart from "@material-ui/icons/ShowChart";
import BarChart from "@material-ui/icons/BarChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import Home from "views/Home/Home.js";
import Trade from "views/Trade/Trade.js";
import Stochastic from "views/Indicators/Stochastic.js";
import Volatility from "views/Indicators/Volatility.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: HomeIcon,
    component: Home,
  },
  {
    path: "/trade",
    name: "Trade",
    faIcon: faHandshake,
    component: Trade,
  },
  {
    path: "/stochastic",
    name: "Stochastic",
    icon: ShowChart,
    component: Stochastic,
  },
  {
    path: "/volatility",
    name: "Volatility",
    icon: BarChart,
    component: Volatility,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
  },
];

export { Home };
export default dashboardRoutes;
