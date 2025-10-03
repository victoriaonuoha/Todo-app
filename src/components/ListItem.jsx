    import styles from "../components/ListItem.module.css"
export default function ListItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("This has been deleted", item);

    setTodos(todos.filter((member) => member !== item));
  }
  function handleStrike(item) {
    console.log("This has been striked", item.name);
    const newArray = todos.map((member) =>member.name === item.name ? {...member, done:!member.done} : member );
    setTodos(newArray)
  }
  const linethrough = item.done ? styles.linethrough : ""

  return (
    <div className="px-[2rem] py-[1rem] shadow ">
      <span onClick={() => handleStrike(item)} className={linethrough}> {item.name}    </span>
      <span>
        <button
          onClick={() => handleDelete(item)}
          className="float-right  text-white px-4 py-2 rounded-lg border bg-amber-300 hover:bg-amber-400 mt-[-8px] cursor-pointer "
        >
          x
        </button>
      </span>
    </div>
  );
}
