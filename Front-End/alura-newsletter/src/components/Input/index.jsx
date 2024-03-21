export default function Input({ placeholder, type }) {
  return (
    <input
      required={true}
      type={type}
      placeholder={placeholder}
      className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-600 dark:placeholder:text-gray-400 placeholder:text-sx placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 focus:invalid:border-2 focus:invalid:border-red-600 dark:focus:invalid:border-2 dark:focus:invalid:border-red-600"
    />
  );
}
