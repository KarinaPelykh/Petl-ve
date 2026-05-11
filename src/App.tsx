import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes for authUser */}
        <Route index element={<p>Login</p>} />
        <Route path="register" element={<p>register</p>} />
        {/* public routes  */}
        <Route path="news" element={<p>news</p>} />
        <Route path="notices" element={<p>notices</p>} />
        <Route path="friends" element={<p>friends</p>} />
        {/* private routes */}
        {/* <Route path="profile" element={<p>user profile</p>} /> */}
      </Route>

      {/* public routes */}
    </Routes>
  );
}

export default App;
