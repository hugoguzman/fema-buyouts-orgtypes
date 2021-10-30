import { useState } from 'react';
import './App.css';
import TopAppBar from './Components/AppBar';
import MyMap from './Components/MyMap'
import { useSelector, useDispatch } from 'react-redux'
import { filteredCountyFrom } from './Components/countyCardSlice';

function App() {
  
  const dispatch = useDispatch()

  
  const [something, setSomething] = useState('')
  
  const reduxState1 = useSelector(state => state.filterCounty.grantsFrom.value)
  const reduxState2 = useSelector(state => state.filterCounty.grantsTo.value)


  return (
    <div className="App">
      <TopAppBar />
      <h5> filterCounty.grantsFrom = {reduxState1} </h5>
      <h5>filterCounty.grantsTo = {reduxState2} </h5>
      <MyMap />
    </div>
  );
}

export default App;
