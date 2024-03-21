import Input from "../Input";

export default function Form({ onSubmit }) {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };
  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center -mt-20 gap-10 mx-5"
    >
      <Input type="text" required placeholder="Submit your name..." />
      <Input type="email" required placeholder="Submit your email..." />
      <button type="submit" className="alura-button">
        Submit
      </button>
    </form>
  );
}
