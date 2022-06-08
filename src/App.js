
import './App.css';
import CircularProgressBar from "./components/svgs/CircularProgressBar";

function App() {
  return (
    <div className="App">
     <CircularProgressBar
          props={{ width: 300, strokeColor: ["red", "indigo"], progress: 70 }}
        />
    </div>
  );
}

export default App;
