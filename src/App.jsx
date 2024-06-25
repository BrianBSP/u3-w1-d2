
import './App.css';
import MyNav from './components/MyNav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <MyNav customNav="Intro React" myNumber={10} />

      </header>
    </div>
  );
}

export default App;
