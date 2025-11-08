import { KeyRound, UserRoundPlus } from "lucide-react";

const NavBar = () => {
  return (
    <header className="w-full p-4 flex justify-end items-center bg-rose-500/20 backdrop-blur-2xl shadow-lg border-b-2-stone-800 rounded-br-md rounded-bl-md dark:bg-stone-200/20 dark:border-stone-700">
      <nav>
        <ul className="flex space-x-8 text-rose-500 font-medium dark:text-stone-200">
          <li>
            <a href="#" className="hover:underline">
              <KeyRound className="size-5 inline-block mr-1" />
              Login
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <UserRoundPlus className="size-5 inline-block mr-1" />
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
