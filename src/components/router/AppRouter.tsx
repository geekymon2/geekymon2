import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { ROUTES } from "../../constants/routes";
import { lazy, Suspense } from "react";

const AppRouter = () => {
  const HomePage = lazy(() => import("../../pages/home/HomePage"));
  const AboutPage = lazy(() => import("../../pages/about/AboutPage"));
  const ContactPage = lazy(() => import("../../pages/contact/ContactPage"));

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppLayout>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          </Routes>
        </AppLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
