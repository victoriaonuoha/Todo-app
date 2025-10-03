import ListItem from "./ListItem";

export default function TodoList({ todos, setTodos }) {
    const newTodos = todos.slice().sort((a,b) => Number(a.done) - Number (b.done));
  return (
    <div className=" flex justify-center items-center text-[14px] font-semibold  mt-3 px-[1rem] md:px-0 py-3 ">
      <div className=" w-full md:w-[50%] space-y-3 shadow-sm shadow-amber-200 rounded-lg ">
        {newTodos.map((item) => (
          <ListItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
}
