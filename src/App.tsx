import { Route, Routes } from "react-router";
import { Layout } from "./app/Layout";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { News } from "./pages/News";
import { OurFriends } from "./pages/OurFriends";
import { FindPets } from "./pages/FindPet";
import { UserProfile } from "./pages/Profile";
import { useAppDispatch, useAppSelector } from "./shared/hooks/reduxHooks";
import { isRefresh } from "./shared/api/redux/user/selectors";
import { useEffect } from "react";
import { refresh } from "./shared/api/redux/user/operations";
import { PrivateRoute } from "./app/guards/PrivateRout";
import { PublicRoute } from "./app/guards/PublicRoute";

function App() {
  const dispatch = useAppDispatch();
  const isRefreshed = useAppSelector(isRefresh);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshed ? (
    <p>LOader</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="*"
          element={
            <PublicRoute>
              <NotFound />
            </PublicRoute>
          }
        />
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        <Route
          path="news"
          element={
            <PublicRoute>
              <News />
            </PublicRoute>
          }
        />
        <Route
          path="findPet"
          element={
            <PublicRoute>
              <FindPets />
            </PublicRoute>
          }
        />
        <Route
          path="friends"
          element={
            <PublicRoute>
              <OurFriends />
            </PublicRoute>
          }
        />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="add-pets"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
