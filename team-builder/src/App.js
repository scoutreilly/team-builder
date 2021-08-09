import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserForm />
      </header>
    </div>
  );
}

export default App;
