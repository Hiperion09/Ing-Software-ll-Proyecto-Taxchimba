import * as React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from "../../Iconos/logo.jpg"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setUsuario } from "../../Redux/Slices/usuarioSlice";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Login() {
  const dispatch = useDispatch()
  const [correoLogin, setCorreoLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  console.log(correoLogin)

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
          correo: correoLogin,
        });
      console.log(response.data);
      dispatch(setUsuario({
        usuario: response.data
    }))
      setTimeout(redirectToServicios, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const redirectToServicios = () => {
    navigate('/servicios'); // Redireccionar a la URL "/servicios"
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={Logo} alt="Logo" sx={{width: 56, height: 56 }}/>
          <Typography component="h1" variant="h5">
            Inicio de Sesion
          </Typography>

          {/* Formulario */}
          <Box component="form" onSubmit={Login}  sx={{ mt: 1 }}>
            {/* Campo 1: Correo */}
            <TextField
              margin="normal"
              value={correoLogin}
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setCorreoLogin(e.target.value)}
            />
            {/* Campo 2: Contraseña */}
            <TextField
              margin="normal"
              value={password}
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Boton de recordar */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerda la contraseña"
            />
            {/* Boton de iniciar sesion */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
            >
              Iniciar Sesion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registro" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}