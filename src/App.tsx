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
        {/* public routes for authUser */}
        <Route path="*" element={<NotFound />} />
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        {/* public routes  */}
        <Route path="news" element={<News />} />
        <Route path="findPet" element={<FindPets />} />
        <Route path="friends" element={<OurFriends />} />
        {/* private routes */}
        <Route path="profile" element={<UserProfile />} />
      </Route>

      {/* public routes */}
    </Routes>
  );
}

export default App;
