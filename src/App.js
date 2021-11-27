import React, { useEffect, useState} from 'react';
import './App.css';
import TopAppBar from './Components/AppBar';
import MyMap from './Components/MyMap'
import { Link, Outlet } from "react-router-dom";
import ControlModal from './Components/ControlModal';
import ZoomModal from './Components/ZoomModal';


function App() {
  
  useEffect(() => {
		setOpen(true);
	}, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenChild(true)
  }
  const [openChild, setOpenChild] = useState(false);
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);


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
      <ControlModal handleOpen={handleOpen} handleClose={handleClose} open={open}/>
      <ZoomModal handleOpen={handleOpenChild} handleClose={handleCloseChild} open={openChild}/>
      <MyMap />
      <Outlet />
    </div>
  );
}

export default App;
