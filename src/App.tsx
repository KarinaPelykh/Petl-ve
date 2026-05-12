import { Route, Routes } from "react-router";
import { Layout } from "./app/Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes for authUser */}
        <Route index path="login" element={<p>Login</p>} />
        <Route path="register" element={<p>register</p>} />
        <Route path="home" element={<p>Home</p>} />

        {/* public routes  */}
        <Route path="news" element={<p>news</p>} />
        <Route path="findPet" element={<p>Find pet</p>} />
        <Route path="friends" element={<p>friends</p>} />
        {/* private routes */}
        {/* <Route path="profile" element={<p>user profile</p>} /> */}
      </Route>

      {/* public routes */}
    </Routes>
  );
}

export default App;
