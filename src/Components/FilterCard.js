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

function FilterCard(props) {
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
            {props.mainTitle}
          </Typography>
          <FormControl className={props.class.formControl} variant='standard'>
            <InputLabel
              id='demo-simple-select-label'
              className={props.class.formControl}
            >
              Min Grants
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={props.typeFrom}
              onChange={props.handleTypeFrom}
            >
              {props.typeRangeValues1.map((rangeValue) => (
                <MenuItem key={rangeValue} value={rangeValue}>
                  {rangeValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={props.class.formControl} variant='standard'>
            <InputLabel
              id='demo-simple-select-label'
              className={props.class.formControl}
            >
              Max Grants
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={props.typeTo}
              onChange={props.handleTypeTo}
            >
              {props.typeRangeValues1.map((rangeValue) => (
                <MenuItem key={rangeValue} value={rangeValue}>
                  {rangeValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={props.class.formControl} variant='standard'>
            <InputLabel
              id='countydollars-from'
              className={props.class.formControl}
            >
              Min Dollars
            </InputLabel>
            <Select
              labelId='countydollars-from'
              id='countydollars-from'
              value={props.typeDollarsFrom}
              onChange={props.handleTypeDollarsFrom}
            >
              {props.typeRangeValues2.map((rangeValue, index) => (
                <MenuItem
                  key={rangeValue}
                  value={rangeValue}
                  // ALEX TODO: find way to pass specific money Strings depending on the orgtype props being passed
                >
                  ${index == 0 ? '579' : 
                  index == 1 ? '100,000' :
                  index == 2 ? '1M' :
                  index == 3 ? '10M' :
                  index == 4 ? '25M'  :
                  ' 442M'} 
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={props.class.formControl} variant='standard'>
            <InputLabel
              id='demo-simple-select-label'
              className={props.class.formControl}
            >
              Max Dollars
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={props.typeDollarsTo}
              onChange={props.handleTypeDollarsTo}
            >
              {props.typeRangeValues2.map((rangeValue,index) => (
                <MenuItem
                  key={rangeValue}
                  value={rangeValue}
                  // -----------------------------------------------------------------------
                >
                  ${index == 0 ? '579' : 
                  index == 1 ? '100,000' :
                  index == 2 ? '1M' :
                  index == 3 ? '10M' :
                  index == 4 ? '25M'  :
                  ' 442M'} 
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={props.class.formControl} variant='standard'>
            <InputLabel
              id='countyproperties-from'
              className={props.class.formControl}
            >
              Min Properties
            </InputLabel>
            <Select
              labelId='countyproperties-from'
              id='countyproperties-from'
              value={props.typePropertiesFrom}
              onChange={props.handleTypePropertiesFrom}
            >
              {props.typeRangeValues3.map((rangeValue) => (
                <MenuItem key={rangeValue} value={rangeValue}>
                  {rangeValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={props.class.formControl} variant='standard'>
            <InputLabel
              id='countyproperties-to'
              className={props.class.formControl}
            >
              Max Properties
            </InputLabel>
            <Select
              labelId='countyproperties-to'
              id='countyproperties-to'
              value={props.typePropertiesTo}
              onChange={props.handleTypePropertiesTo}
            >
              {props.typeRangeValues3.map((rangeValue) => (
                <MenuItem key={rangeValue} value={rangeValue}>
                  {rangeValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default FilterCard;
