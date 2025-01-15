export default function Footer() {
  return (
    <footer className="flex justify-center bg-white shadow-md mx-auto my-4 py-4 rounded-full w-10/12 text-black">
      <p>
        &copy; {new Date().getFullYear()} Shopping Cart. All rights reserved.
      </p>
    </footer>
  );
}
