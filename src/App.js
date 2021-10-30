import './App.css';
import TopAppBar from './Components/AppBar';
import MyMap from './Components/MyMap'
import { useSelector } from 'react-redux'

function App() {
  
  

  
  
  
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
