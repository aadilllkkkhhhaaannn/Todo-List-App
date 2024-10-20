import ListGroup from "./Components/ListGroup";
import Form from "./Components/Form";
import { TodoProvider } from "./provider/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div class="container my-5">
        <h1 class="text-center">Crud Application</h1>
        <Form />
        <ListGroup />
      </div>
    </TodoProvider>
  );
};

export default App;
