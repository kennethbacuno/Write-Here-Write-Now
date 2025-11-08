import type { ButtonHTMLAttributes } from "react";

// 1. Define the props interface for clarity and type safety (TypeScript)
interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

// 2. Destructure specific props and use the rest parameter for other HTML attributes
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  ...rest // Collects all other standard button attributes (e.g., disabled, type)
}) => {
  return (
    <button
      className="bg-rose-400 shadow- rounded-xl py-3 px-6    text-stone-100 font-semibold cursor-pointer transition duration-300 hover:bg-rose-500 hover:scale-105 transform dark:bg-stone-600 hover:dark:bg-stone-700"
      onClick={onClick}
      {...rest} // Spread the rest of the attributes onto the button element
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
