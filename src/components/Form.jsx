import { useState } from "react";

export default function Form({ todos, SetTodos }) {
  const [todo, SetTodo] = useState({name: "", done: false});
  function handleSubmission(e) {
    e.preventDefault();
    SetTodos([...todos, todo]);
    SetTodo({name: "", done: false});
  }
  return (
    <form
      action=""
      onSubmit={handleSubmission}
      className="flex justify-center items-center mt-3 px-[1rem] md:px-0 "
    >
      <div className="  w-full md:w-[50%] px-[1rem] py-[14px] md:px-0 gap-4 md:gap-0  flex justify-around text-[14px] font-semibold shadow-sm shadow-amber-200">
        <input
        placeholder="Write todo items here"
        className=" px-[2rem] outline-none w-[90%] "
          type="text"
          value={todo.name}
          onChange={(e) => SetTodo({name:e.target.value, done:false})}
        />
        <button className="text-center px-2 py-2 rounded-lg border bg-amber-300 hover:bg-amber-400 text-white cursor-pointer">Add</button>
      </div>
    </form>
  );
}
