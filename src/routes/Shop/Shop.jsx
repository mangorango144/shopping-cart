import { Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <section className="m-auto animate-slideUpFadeIn">
      <h1 className="bg-clip-text bg-gradient-to-b from-pink-500 to-pink-800 mb-10 font-bold text-5xl text-center text-transparent leading-relaxed">
        Welcome to the shop!
      </h1>
      <Outlet />
    </section>
  );
}
