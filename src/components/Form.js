import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Form() {

    const classes = useStyles();

    const [area, setArea] = React.useState('Nacional');
    const [time, setTime] = React.useState('Partial');

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    return(
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <p>Precios</p>
                <FormControl component="fieldset">
                    <TextField
                        id="standard-required-"
                        label="Rango de precio"
                    />
                </FormControl>
                <br />
                <br />

                <p>Coberturas</p>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Area </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={area} onChange={handleAreaChange}>
                        <FormControlLabel value="national" control={<Radio />} label="Nacional" />
                        <FormControlLabel value="international" control={<Radio />} label="Internacional" />
                    </RadioGroup>
                    <FormLabel component="legend">Tiempo </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={time} onChange={handleTimeChange}>
                        <FormControlLabel value="partial" control={<Radio />} label="Parcial" />
                        <FormControlLabel value="fulltime" control={<Radio />} label="24/7" />
                    </RadioGroup>
                </FormControl>



                <br />
                <br />

            </div>
        </form>
    );
}

export default Form;

/*
# Formulario
1) PRECIOS
rango de precio
textbox

Limite de gasto en operaciones
Cubre hasta 100,000 lempiras.
textbox

2) COBERTURAS DEL SEGURO

Cobertura territorial
Nacional / Internacional
radio button

Cobertura parcial o 24/7
radio button

Servicios de ambulancia
consultas medicas semestrales
checkbox

Control de maternidad
Ultra sonidos y todo el periodo donde una mujer esta embarazada.
y si incluye el parto
check


3) OTRAS CONSIDERACIONES
diagnosticar si yo siento los sintomas puedo ir a esa red
check

esa aseguradora cuente con una red de medicos que permita cubrir mis necesidades medicas.
Doctores necesarios
oftalmoglogo, w/emologo y asi
check

Asistencia funeraria
te cubre tus gastos funebres
check


*/