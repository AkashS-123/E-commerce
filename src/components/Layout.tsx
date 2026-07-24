import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import CategoryBar from "./CategoryBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
      <TopBar />
      <Header />
      <CategoryBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
