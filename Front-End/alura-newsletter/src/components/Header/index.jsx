import ToggleTheme from "../ToggleTheme";

export default function Header({ user }) {
  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100 text-xl">
        Hello, {user?.name || "Usuário"}
      </span>
      <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  );
}
