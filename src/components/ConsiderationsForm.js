import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

export default function ConsiderationsForm() {
    
    //for checkboxes
    const [state, setState] = React.useState({
        analysis: false,
        necessities: false,
        funeral: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
      const { analysis, necessities, funeral } = state;
      //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Otras consideraciones
      </Typography>
      <Grid container spacing={3}>
 
        <Grid item xs={12} md={6}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={analysis} onChange={handleChange} name="analysis" />}
            label="Analisis de laboratorio"
          />
          <FormControlLabel
            control={<Checkbox checked={necessities} onChange={handleChange} name="necessities" />}
            label="Necesidades medicas (oftalmologo, etc)"
          />
          <FormControlLabel
            control={<Checkbox checked={funeral} onChange={handleChange} name="funeral" />}
            label="Asistencia funeraria - gastos funebres"
          />
        </FormGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}