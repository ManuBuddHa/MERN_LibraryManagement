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
          “A <span style={{ color: 'red' }}>Library</span> is a map of human experience, drawn in ink and bound in <span style={{ color: 'red' }}>hope</span>.”
        </p>
        <blockquote>
          — Eleanor Finch
        </blockquote>

      </div>
      <Books />
      <Members />
      <Signup />
      <Login />
    </div>
  );
};

export default App;