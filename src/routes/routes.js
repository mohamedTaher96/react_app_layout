import SignIn from "../views/auth/signin";
import SignUp from "../views/auth/signup";
import Home from "../views/home";
import AuthInfo from "../views/auth/info.js";
import Company from "../views/Company";
import Dashboard from "../views/dashboard";
import CompanyInput from "../views/features/input";
import CompanyView from "../views/features/view";

export const MainRoutes = [

  {
    path: "/company/input/:company",
    component: CompanyInput,
  },
  {
    path: "/company/view/:company",
    component: CompanyView,
  },
  {
    path: "/company/:company",
    component: Dashboard,
  },
  {
    path: "/",
    component: Company,
    exact: true,
  }
];

export const AuthMainRoutes = [
  {
    path: "/signin/info",
    component: AuthInfo,
  },
];

export const AuthRoutes = [
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/signin",
    component: SignIn,
  },

];
export const WebsiteRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
]
