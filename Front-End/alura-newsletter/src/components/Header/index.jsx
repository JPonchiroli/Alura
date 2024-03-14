import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="flex h-20 bg-gray-500 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100 text-xl">Hello User</span>
      <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
      <MoonIcon className="h-8 text-gray-100 hidden sm:block" />
    </div>
  );
}
