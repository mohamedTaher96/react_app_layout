
import SignIn from "../views/auth/signin";
import SignUp from "../views/auth/signup";
import Home from "../views/home/index";

export const MainRoutes = [
    {
        path: "/",
        component: Home,
        exact: true,
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
