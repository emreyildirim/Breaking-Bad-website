import Home from "../pages/Home";
import Cast from "../pages/Cast";
import Quotes from "../pages/Quotes";
import Contact from "../pages/Contact";
import Season1 from "../pages/Season1";
import Season2 from "../pages/Season2";
import Season3 from "../pages/Season3";
import Season4 from "../pages/Season4";
import Season5 from "../pages/Season5";
import {Logo} from "../components/Logo/Logo.styles"
import LogoImage from "../assets/Logo.png"
export const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    title: <Logo  src={LogoImage} />,
    isSeason: false
  },
  {
    path: "/cast",
    exact: false,
    component: () => <Cast />,
    title: "Cast",
    isSeason: false
    
  },
  {
    path: "/quotes",
    exact: false,
    component: () => <Quotes />,
    title: "Quotes",
    isSeason: false
  },
  {
    path: "/contact",
    exact: false,
    component: () => <Contact />,
    title: "Contact",
    isSeason: false
  },
  {
    path: "/season1",
    exact: false,
    component: () => <Season1 />,
    title: "Season 1",
    isSeason: true
  },
  {
    path: "/season2",
    exact: false,
    component: () => <Season2 />,
    title: "Season 2",
    isSeason: true
  },
  {
    path: "/season3",
    exact: false,
    component: () => <Season3 />,
    title: "Season 3",
    isSeason: true
  },
  {
    path: "/season4",
    exact: false,
    component: () => <Season4 />,
    title: "Season 4",
    isSeason: true
  },
  {
    path: "/season5",
    exact: false,
    component: () => <Season5 />,
    title: "Season 5",
    isSeason: true
  },
];
