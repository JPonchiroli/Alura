import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme() {
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    systemPreference && pageClasses.add();
  });

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 block cursor-pointer dark:hidden"
        onClick={toggle}
      />
      <SunIcon
        className="h-8 text-gray-100 hidden cursor-pointer dark:block"
        onClick={toggle}
      />
    </div>
  );
}
