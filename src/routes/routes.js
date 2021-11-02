import SignIn from "../views/auth/signin";
import SignUp from "../views/auth/signup";
import Home from "../views/home/index";
import { AddNewCompany } from "../views/New/AddNewCompany";
import Company from "../views/New/Company";
import CompanyCats from "../views/New/CompanyCats";

export const MainRoutes = [
  // {
  //   path: "/",
  //   component: Home,
  //   exact: true,
  // },
  {
    path: "/",
    component: SignUp,
    exact: true,
  },
  {
    path: "/login",
    component: SignIn,
  },

  {
    path: "/companies",
    component: Company,
  },
  {
    path: "/companycategories",
    component: CompanyCats,
  },
  {
    path: "/addnewcompany",
    component: AddNewCompany,
  },
];

export const AuthRoutes = [
  // {
  //   path: "/login",
  //   component: SignIn,
  // },
  // {
  //   path: "/signup",
  //   component: SignUp,
  // },
];
