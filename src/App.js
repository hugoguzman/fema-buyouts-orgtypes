import './App.css';
import TopAppBar from './Components/AppBar';
import MyMap from './Components/MyMap'
import { useSelector } from 'react-redux'

function App() {
  
  

  
  
  
  const COUNTY_FROM = useSelector(state => state.filterCounty.grantsFrom.value);
  const COUNTY_TO = useSelector(state => state.filterCounty.grantsTo.value);
  const COUNTY$_FROM = useSelector(state => state.filterCounty.dollarsFrom.value);
  const COUNTY$_TO = useSelector(state => state.filterCounty.dollarsTo.value);
  const COUNTYPROPS_FROM = useSelector(state => state.filterCounty.propertiesFrom.value);
  const COUNTYPROPS_TO = useSelector(state => state.filterCounty.propertiesTo.value);

  return (
    <div className="App">
      <TopAppBar />
      <h2>redux global states:</h2>
      <h5> filterCounty.grantsFrom = {COUNTY_FROM} </h5>
      <h5>filterCounty.grantsTo = {COUNTY_TO} </h5>
      <h5>filterCounty.dollarsFrom = {COUNTY$_FROM} </h5>
      <h5>filterCounty.dollarsTo = {COUNTY$_TO} </h5>
      <h5>filterCounty.propertiesFrom = {COUNTYPROPS_FROM} </h5>
      <h5>filterCounty.propertiesTo = {COUNTYPROPS_TO} </h5>
      <MyMap />
    </div>
  );
}

export default App;
