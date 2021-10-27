import { useState }from 'react'
import { styled } from '@mui/material/styles';
import '@fontsource/roboto';
import {
  Grid,
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
                  // xs={{ fontSize: 14 }}
                  sx={{fontSize: 16}}
                  fontWeight='bold'
                  color='text.secondary'
                  gutterBottom
                >
                    {props.mainTitle}
                  {/* County Filters */}
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
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={51}>51</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant="standard">
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
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={51}>51</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant="standard">
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
                    <MenuItem value={579}>$579</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={25000000}>$25M</MenuItem>
                    <MenuItem value={441696754}>$442M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant="standard">
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
                    <MenuItem value={579}>$579</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={250000000}>$25M</MenuItem>
                    <MenuItem value={441696755}>$442M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant="standard">
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
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={2992}>2,992</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={props.class.formControl} variant="standard">
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
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={2992}>2,992</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
        </div>
    )
}

export default FilterCard
