import { useState } from 'react'
import '@fontsource/roboto';
import {
	Card,
	CardContent,
	Typography,
	InputLabel,
	FormControl,
	MenuItem,
	Select,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { filteredStateFrom, filteredStateTo, filteredStateDollarsFrom, filteredStateDollarsTo, filteredStatePropsFrom, filteredStatePropsTo } from './stateCardSlice';




function StateFilterCard(props) {

    const dispatch = useDispatch();

    const globalStateFrom = useSelector(state => state.filterState.grantsFrom.value);
    const globalStateTo = useSelector(state => state.filterState.grantsTo.value);
    const globalStateDollarsFrom = useSelector(state => state.filterState.dollarsFrom.value);
    const globalStateDollarsTo = useSelector(state => state.filterState.dollarsTo.value);
    const globalStatePropsFrom = useSelector(state => state.filterState.propertiesFrom.value);
    const globalStatePropsTo = useSelector(state => state.filterState.propertiesTo.value);


    const [stateFrom, setStateFrom] = useState(globalStateFrom);
  const [stateTo, setStateTo] = useState(globalStateTo);
  const [stateDollarsFrom, setStateDollarsFrom] = useState(globalStateDollarsFrom);
  const [stateDollarsTo, setStateDollarsTo] = useState(globalStateDollarsTo);
  const [statePropertiesFrom, setStatePropertiesFrom] = useState(globalStatePropsFrom);
  const [statePropertiesTo, setStatePropertiesTo] = useState(globalStatePropsTo);

  const handleStateTo = (e) => {
    setStateTo(e.target.value);
    dispatch(filteredStateTo(e.target.value))
  };

  const handleStateFrom = (e) => {
    setStateFrom(e.target.value);
    dispatch(filteredStateFrom(e.target.value))
  };

  const handleStateDollarsFrom = (e) => {
    setStateDollarsFrom(e.target.value);
    dispatch(filteredStateDollarsFrom(e.target.value))
  };

  const handleStateDollarsTo = (e) => {
    setStateDollarsTo(e.target.value);
    dispatch(filteredStateDollarsTo(e.target.value))
  };

  const handleStatePropertiesFrom = (e) => {
    setStatePropertiesFrom(e.target.value);
    dispatch(filteredStatePropsFrom(e.target.value))
  };

  const handleStatePropertiesTo = (e) => {
    setStatePropertiesTo(e.target.value);
    dispatch(filteredStatePropsTo(e.target.value))
  };




    return (
        <div>
           <Card raised={true}>
              <CardContent className={props.class.orgtypeCards}>
                <Typography
                  sx={{ fontSize: 16 }}
                  fontWeight='bold'
                  color='text.secondary'
                  gutterBottom
                >
                  State Entity Filters
                </Typography>
                <FormControl className={props.class.formControl} variant='standard'>
                  <InputLabel id='state-from' className={props.class.formControl}>
                    Min Grants
                  </InputLabel>
                  <Select
                    labelId='state-from'
                    id='state-from'
                    value={stateFrom}
                    onChange={handleStateFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant='standard'>
                  <InputLabel id='state-to' className={props.class.formControl}>
                    Max Grants
                  </InputLabel>
                  <Select
                    labelId='state-to'
                    id='state-to'
                    value={stateTo}
                    onChange={handleStateTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant='standard'>
                  <InputLabel id='state-from' className={props.class.formControl}>
                    Min Dollars
                  </InputLabel>
                  <Select
                    labelId='state-from'
                    id='state-from'
                    value={stateDollarsFrom}
                    onChange={handleStateDollarsFrom}
                  >
                    <MenuItem value={9133}>$9,133</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={117760209}>$118M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant='standard'>
                  <InputLabel id='state-to' className={props.class.formControl}>
                    Max Dollars
                  </InputLabel>
                  <Select
                    labelId='state-to'
                    id='state-to'
                    value={stateDollarsTo}
                    onChange={handleStateDollarsTo}
                  >
                    <MenuItem value={9133}>$9,133</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={117760209}>$118M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant='standard'>
                  <InputLabel
                    id='stateproperties-from'
                    className={props.class.formControl}
                  >
                    Min Properties
                  </InputLabel>
                  <Select
                    labelId='stateproperties-from'
                    id='stateproperties-from'
                    value={statePropertiesFrom}
                    onChange={handleStatePropertiesFrom}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={490}>490</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant='standard'>
                  <InputLabel
                    id='stateproperties-to'
                    className={props.class.formControl}
                  >
                    Max Properties
                  </InputLabel>
                  <Select
                    labelId='stateproperties-to'
                    id='stateproperties-to'
                    value={statePropertiesTo}
                    onChange={handleStatePropertiesTo}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={490}>490</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card> 
        </div>
    )
}

export default StateFilterCard
