import { Route, Routes } from "react-router";
import { Layout } from "./app/Layout";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { News } from "./pages/News";
import { OurFriends } from "./pages/OurFriends";
import { FindPets } from "./pages/FindPet";

function App() {
  return (
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
        <Route path="profile" element={<p>user profile</p>} />
      </Route>

      {/* public routes */}
    </Routes>
  );
}

export default App;
