import { Navigate, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainExperiencesPage from "./pages/experiences/MainExperiencesPage";
import MainProjectsPage from "./pages/Projects/MainProjectsPage";
import MainEducationsPage from "./pages/educations/MainEducationsPage";
import MainCertificatesPage from "./pages/certificates/MainCertificatesPage";
import MainMediaSosialPage from "./pages/media-sosial/MainMediaSosialPage";
import LoginPage from "./pages/Auth/LoginPage";
import HomePageView from "./views/HomePageView";
import ExperiencePageView from "./views/ExperiencePageView";

const token = localStorage.getItem("token");

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
  {
    path: "/",
    element: <HomePageView />,
  },
  {
    path: "/experiences",
    element: <ExperiencePageView />,
  },
  {
    path: "/login",
    element: token ? <Navigate to={"/admin/dashboard"} /> : <LoginPage />,
  },
  {
    path: "/admin/dashboard",
    element: !token ? <Navigate to={"/login"} /> : <Homepage />,
  },
  {
    path: "/admin/experiences",
    element: !token ? <Navigate to={"/login"} /> : <MainExperiencesPage />,
  },
  {
    path: "/admin/projects",
    element: !token ? <Navigate to={"/login"} /> : <MainProjectsPage />,
  },
  {
    path: "/admin/educations",
    element: !token ? <Navigate to={"/login"} /> : <MainEducationsPage />,
  },
  {
    path: "/admin/certificates",
    element: !token ? <Navigate to={"/login"} /> : <MainCertificatesPage />,
  },
  {
    path: "/admin/media-social",
    element: !token ? <Navigate to={"/login"} /> : <MainMediaSosialPage />,
  },
]);

export default router;
