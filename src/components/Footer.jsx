export default function Footer({ completedTodos, totalTodo }) {
  return (
    <div className="bg-yellow-500 text-center text-[20px] md:text-3xl font-bold py-1 text-white fixed bottom-0 right-0 left-0 ">
      <div>
        <span className="m-2 md:m-8">Completed Todos: {completedTodos}</span>
        <span className="m-2 md:m-8">Total Todos: {totalTodo}</span>
      </div>
    </div>
  );
}
