import Login from "./Login";
import NotFound from "../components/NotFound";
import HomePage from "./HomePage";
import Groups from "./Groups";
import Tickets from "./Tickets";
import PersonalData from "./PersonalData";

export default [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/groups",
        element: <Groups />,
    },
    {
        path: "/tickets",
        element: <Tickets />,
    },
    {
        path: "/personalData",
        element: <PersonalData />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]