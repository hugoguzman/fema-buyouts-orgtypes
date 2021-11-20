import { useRef } from 'react';
import Tooltip from '@mui/material/Tooltip';
import './App.css';
import TopAppBar from './Components/AppBar';
import MyMap from './Components/MyMap'


function App() {
 
  return (
    <div className="App">
      <TopAppBar />
      <Tooltip title='Map' placement={'top-end'} arrow >
      <MyMap />
      </Tooltip>
    </div>
  );
}

export default App;
