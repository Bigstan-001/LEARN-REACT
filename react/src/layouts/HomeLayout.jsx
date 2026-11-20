import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
