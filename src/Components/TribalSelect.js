import React from "react";
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  function TribalSelect(props) {
    const classes = useStyles();
    const tribalFrom=props.tribalFrom;
    const handleTribalFrom=props.handleTribalFrom;
    const tribalTo=props.tribalTo;
    const handleTribalTo=props.handleTribalTo;

    return(
    <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="tribal-from">Min Grants: Tribal Nations</InputLabel>
        <Select
            labelId="tribal-from"
            id="tribal-from"
            value={tribalFrom}
            onChange={handleTribalFrom}
        >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
        </Select>
        <FormHelperText>Select minimum number of awarded grants.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="tribal-to">Max Grants: Tribal Entities</InputLabel>
        <Select
            labelId="tribal-to"
            id="tribal-to"
            value={tribalTo}
            onChange={handleTribalTo}
        >
        <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
        </Select>
        <FormHelperText>Select maximum number of awarded grants.</FormHelperText>
        </FormControl>
    </div>
    )
  }

export default TribalSelect;