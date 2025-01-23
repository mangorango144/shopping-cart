export default function Footer() {
  return (
    <footer className="flex justify-center bg-white shadow-md mx-auto mt-32 mb-4 py-4 rounded-full w-[95%] xl:w-8/12 text-black">
      <p>
        &copy; {new Date().getFullYear()} Shopping Cart. All rights reserved.
      </p>
    </footer>
  );
}
