import * as React from 'react';
import {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from "@material-ui/icons/Home"
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from "../Iconos/logo.jpg";
import useStyles from './styles.js';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../Redux/Slices/usuarioSlice";
import { useNavigate } from "react-router-dom";

export default function MenuAppBar({tipoUsuario}) {
  const navigate = useNavigate();
  const classes =  useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const usuario = useSelector(selectUser)
  console.log(usuario)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goHome = () => {
    navigate('/');
  };

  return tipoUsuario === 2 ? (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            {auth && (
              <div className='div-items'>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  sx={{ pl: 60 }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={handleClose}>Configuracion</MenuItem>
                  <MenuItem onClick={handleClose}>Historial de solicitudes</MenuItem>
                  <MenuItem onClick={handleClose}>Metodos de pago</MenuItem>
                  <MenuItem onClick={handleClose}>Peticiones y Quejas</MenuItem>
                </Menu>
              </div>
            )}
            <Button variant="contained" onClick={goHome}>Cerrar Sesion</Button>
          </Toolbar>
        </AppBar>
      </Box>
  ) : tipoUsuario === 3 ? (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            {auth && (
              <div className='div-items'>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  sx={{ pl: 60 }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={handleClose}>Configuracion</MenuItem>
                  <MenuItem onClick={handleClose}>Historial de Solicitudes de Clientes</MenuItem>
                  <MenuItem onClick={handleClose}>Tarjeta de Cliente Frecuente</MenuItem>
                  <MenuItem onClick={handleClose}>Emitir Facturas</MenuItem>
                  <MenuItem onClick={handleClose}>Cierres</MenuItem>
                </Menu>
              </div>
            )}
            <Button variant="contained" onClick={goHome}>Cerrar Sesion</Button>
          </Toolbar>
        </AppBar>
      </Box>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            {auth && (
              <div className='div-items'>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  sx={{ pl: 60 }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={handleClose}>Configuracion</MenuItem>
                  <MenuItem onClick={handleClose}>Historial de solicitudes</MenuItem>
                  <MenuItem onClick={handleClose}>Tarjeta de Cliente Frecuente</MenuItem>
                  <MenuItem onClick={handleClose}>Peticiones y Quejas</MenuItem>
                </Menu>
              </div>
            )}
            <Button variant="contained" onClick={goHome}>Cerrar Sesion</Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}