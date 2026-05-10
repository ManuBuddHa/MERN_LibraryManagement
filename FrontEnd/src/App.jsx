import NavBarComponent from "./components/NavBar";
import "./App.css"
import Books from "./components/Books";
import Members from "./components/Members";
import Signup from "./components/Signup";
import Login from "./components/Login";
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
      <Books/>
      <Members/>
      <Signup/>
      <Login/>
    </div>
  );
};

export default App;