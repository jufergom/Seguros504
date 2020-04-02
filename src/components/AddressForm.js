import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

export default function AddressForm() {
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
        Precios
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
          <TextField
            required
            id="price"
            label="Rango de precio"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="operationsprice"
            label="Limite de gasto en operaciones"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}