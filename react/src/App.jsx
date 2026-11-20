import { Routes, Route } from "react-router";
import About from "./pages/About";
import MyProfile from "./pages/MyProfile";
import NewStand from "./pages/NewStand";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./components/dashboard/Overview";
import Users from "./components/dashboard/Users";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news-tand" element={<NewStand />} />
        <Route path="/dashboard" />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="/dashboard/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
