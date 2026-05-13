import NavBarComponent from "./components/NavBar";
import "./App.css"
import Books from "./components/Books";
import Members from "./components/Members";
import Signup from "./components/Signup";
import Login from "./components/Login";
import RoutePaths from "./components/Routes/route";
const App = () => {
  return (
    <div className="App">
      <NavBarComponent />
      <RoutePaths/>
    </div>
  );
};

export default App;