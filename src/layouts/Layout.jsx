import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { Toaster } from "react-hot-toast";
import { ShopProvider } from "../context";
import { Provider } from "react-redux";
import { store } from "../redux";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={store}>
        <ShopProvider>
          <Toaster position="bottom-right" />
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </ShopProvider>
      </Provider>
    </div>
  );
}
