import NavBarComponent from "./components/NavBar";
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <NavBarComponent />

      <div className="quote">
        <p>
        “A <span style={{}}>Library</span> is a map of human experience, drawn in ink and bound in hope.” 
        </p>
        <blockquote>
        — Eleanor Finch
        </blockquote>
      
      </div>

    </div>
  );
};

export default App;