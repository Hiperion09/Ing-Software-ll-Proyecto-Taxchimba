import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#0087B8',
    float: 'left',
    height: '55px'
  },
  toolBar: {
    justifyContent: 'flex-end'
  },
  typography: {
    marginRight: "25px",
    marginLeft: "25px",
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));