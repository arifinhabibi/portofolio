import { Navigate, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainExperiencesPage from "./pages/experiences/MainExperiencesPage";
import MainProjectsPage from "./pages/Projects/MainProjectsPage";
import MainEducationsPage from "./pages/educations/MainEducationsPage";
import MainCertificatesPage from "./pages/certificates/MainCertificatesPage";
import MainMediaSosialPage from "./pages/media-sosial/MainMediaSosialPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/experiences",
    element: <MainExperiencesPage />,
  },
  {
    path: "/projects",
    element: <MainProjectsPage />,
  },
  {
    path: "/educations",
    element: <MainEducationsPage />,
  },
  {
    path: "/certificates",
    element: <MainCertificatesPage />,
  },
  {
    path: "/media-social",
    element: <MainMediaSosialPage />,
  },
]);

export default router;
