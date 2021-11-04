import './App.css';
import TopAppBar from './Components/AppBar';
import MyMap from './Components/MyMap'
import { useSelector } from 'react-redux'

function App() {
  

  return (
    <div className="App">
      <TopAppBar />
      <MyMap />
    </div>
  );
}

export default App;
