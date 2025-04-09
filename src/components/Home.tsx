import Todolist from "./Todolist";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
      {/* <Counter /> */}
      <Todolist />
    </div>
  );
}

export default Home;
