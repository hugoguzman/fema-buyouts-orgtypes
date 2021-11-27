import './App.css';
import TopAppBar from './Components/AppBar';
import MyMap from './Components/MyMap'
import { Link, Outlet } from "react-router-dom";


function App() {
 
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> | {" "}
        <Link to="/counties">Counties</Link>
      </nav>
      <TopAppBar />
      <MyMap />
      <Outlet />
    </div>
  );
}

export default App;
