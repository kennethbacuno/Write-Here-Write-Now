const NavBar = () => {
  return (
    <header className="w-full p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyApp</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
