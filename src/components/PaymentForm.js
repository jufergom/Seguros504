import React from 'react';
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

export default function PaymentForm() {
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
            <FormLabel component="legend">Area </FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={area} onChange={handleAreaChange}>
                <FormControlLabel value="national" control={<Radio />} label="Nacional" />
                <FormControlLabel value="international" control={<Radio />} label="Internacional" />
            </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormLabel component="legend">Tiempo </FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={time} onChange={handleTimeChange}>
                <FormControlLabel value="partial" control={<Radio />} label="Parcial" />
                <FormControlLabel value="fulltime" control={<Radio />} label="24/7" />
            </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
        <FormLabel component="legend">Servicios</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Servicios de ambulancia"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Consultas medicas semestrales"
          />
        </FormGroup>
        </Grid>
        <Grid item xs={12} md={6}>
        <FormLabel component="legend">Control de maternidad</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Cobertura de embarazo"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Asistencia durante el parto"
          />
        </FormGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}