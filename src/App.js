import './App.css';
import AddTodo from './components/AddTodo';
import TodoListe from "./components/TodoListe";
function App() {
  return (
    <div className="App">
       <AddTodo/>
       <TodoListe/>
    </div>
  );
}

export default App;
