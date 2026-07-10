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
import { AddPetPage } from "./pages/AddPet";

function App() {
  const dispatch = useAppDispatch();
  const isRefreshed = useAppSelector(isRefresh);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshed ? (
    <p>Loader</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />

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

        <Route path="news" element={<News />} />
        <Route path="findPet" element={<FindPets />} />
        <Route path="friends" element={<OurFriends />} />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="add-pet"
          element={
            <PrivateRoute>
              <AddPetPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
