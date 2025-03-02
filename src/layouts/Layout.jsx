import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { Toaster } from "react-hot-toast";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/shopThunks";

function AppInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    // timeout used to demonstrate the loader in products page
    setTimeout(() => {
      dispatch(fetchProducts());
    }, 500);
  }, [dispatch]);

  return null;
}

export function Layout() {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <AppInitializer />
        <Toaster position="bottom-right" />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
