import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { ShopProvider } from "../routes/Shop/context";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../context";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ShopProvider>
        <UserProvider>
          <Toaster position="bottom-right" />
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </UserProvider>
      </ShopProvider>
    </div>
  );
}
