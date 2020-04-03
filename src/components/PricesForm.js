import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function PricesForm() {
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