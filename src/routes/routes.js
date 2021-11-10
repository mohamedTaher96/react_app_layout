import SignIn from "../views/auth/signin";
import SignUp from "../views/auth/signup";
import Home from "../views/home/index";
import AuthInfo from "../views/auth/info.js";
import Company from "../views/Company";
import Dashboard from "../views/dashboard";
import CompanyInput from "../views/features/input";

export const MainRoutes = [
  {
    path: "/",
    component: Company,
    exact: true
  },
  {
    path: "/company/input/:company",
    component: CompanyInput,
  },
  {
    path: "/company/:company",
    component: Dashboard,
  },
];

export const AuthMainRoutes = [
  {
    path: "/login/info",
    component: AuthInfo,
  },
];

export const AuthRoutes = [
  {
    path: "/signup",
    component: SignUp,
    exact: true,
  },
  {
    path: "/signin",
    component: SignIn,
  },

];
