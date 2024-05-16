function handelSubmit(e) {
  e.preventDefault();
  console.log("Sumbited");
}
export default function Form() {
  return (
    <form className="mb-4" onSubmit={handelSubmit}>
      <button>Submit</button>
    </form>
  );
}
