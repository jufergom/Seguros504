import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
    const [area, setArea] = React.useState('Nacional');
    const [time, setTime] = React.useState('Partial');
    
    //for checkboxes
    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      const { gilad, jason, antoine } = state;
      const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
 
        <Grid item xs={12} md={6}>
        <FormLabel component="legend">Control de maternidad</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Consultas medicas"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Necesidades medicas (oftalmologo, etc)"
          />
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Asistencia funeraria - gastos funebres"
          />
        </FormGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}