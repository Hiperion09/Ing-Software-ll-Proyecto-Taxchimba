import React, {useState, useEffect, useRef, createRef} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './sitiosinteres';
import DetallesSitios from './DetallesSitios';
const SitiosInteres = ({sitioInteres, tipo, setTipo, calificacion, setCalificacion}) => {
    const  classes = useStyles()
    
    
  return (
    <div className={classes.container}>
        <Typography variant='h5'>
            Sitios de interes
        </Typography>
        <FormControl className={classes.formControl}>
            <InputLabel>Tipo</InputLabel>
            <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <MenuItem value="restaurants">Restaturantes</MenuItem>
                <MenuItem value="hotels">Hoteles</MenuItem>
                <MenuItem value="attractions">Atracciones</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel>Calificacion</InputLabel>
            <Select value={calificacion} onChange={(e) => setCalificacion(e.target.value)}>
                <MenuItem value={0}>Todos</MenuItem>
                <MenuItem value={3}>Debajo de 3.0</MenuItem>
                <MenuItem value={4}>Debajo de 4.0</MenuItem>
                <MenuItem value={4.5}>Debajo de 4.5</MenuItem>
            </Select>
        </FormControl>

        <Grid spacin={3} className={classes.list}>
            {sitioInteres?.map((lugar, i) => (
                <Grid item key={i} xs={12}>
                    <DetallesSitios lugar={lugar}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default SitiosInteres