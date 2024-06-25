import "./App.css";
import MyNav from "./components/MyNav";
import MySecondNav from "./components/MySecondNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav customNav="Intro React" myNumber={10} />
        <MySecondNav customNav="Introduction to react" />
      </header>
    </div>
  );
}

export default App;
