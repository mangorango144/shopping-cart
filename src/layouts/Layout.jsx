import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { ShopProvider } from "../routes/Shop/context";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ShopProvider>
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </ShopProvider>
    </div>
  );
}
