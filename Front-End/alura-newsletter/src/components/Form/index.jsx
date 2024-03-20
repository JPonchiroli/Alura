export default function Form({ onSubmit }) {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({name, email})
  };
  return (
    <form onSubmit={safeSubmit}>
      <input type="text" placeholder="Submit your name" />
      <input type="email" placeholder="Submit your email" />
      <button type="submit">Submit</button>
    </form>
  );
}
