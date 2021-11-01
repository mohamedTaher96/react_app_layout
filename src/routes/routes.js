import SignIn from "../views/auth/signin";
import SignUp from "../views/auth/signup";
import Home from "../views/home/index";
import AddCompany from "../views/New/AddCompany";
import Company from "../views/New/Company";
import CompanyCats from "../views/New/CompanyCats";
import Configure from "../views/New/Configure";

export const MainRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/addcompany",
    component: AddCompany,
  },
  {
    path: "/configure",
    component: Configure,
  },
  {
    path: "/companies",
    component: Company,
  },
  {
    path: "/companycategories",
    component: CompanyCats,
  },
];

export const AuthRoutes = [
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];
