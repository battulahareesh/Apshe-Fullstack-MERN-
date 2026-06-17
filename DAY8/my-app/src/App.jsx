import "./App.css";
import Welcome, { WelcomeWithName } from "./Welcome.jsx";
import Profile from "./Component1.jsx";

function App() {
  const isLoggedin = true;

  return (
    <div>
      <h1>My website</h1>
      {isLoggedin ? <button>Logout</button> : <button>Login</button>}
      <Welcome />
      <WelcomeWithName name="Sarit" />
      <Profile />
    </div>
  );
}

export default App;
