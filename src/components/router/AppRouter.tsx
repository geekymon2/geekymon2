import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { lazy, Suspense } from "react";
import AppLayout from "../layout/AppLayout";

const AppRouter = () => {
  const HomePage = lazy(() => import("../../pages/home/HomePage"));
  const SkillsPage = lazy(() => import("../../pages/skills/SkillsPage"));

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.SKILLS} element={<SkillsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
