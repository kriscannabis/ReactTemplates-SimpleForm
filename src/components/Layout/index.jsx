import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout = ({children})=>{
  // const history = useHistory();
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button color="inherit" onClick={()=>navigate('/counter')}>Counter</Button>
          <Button color="inherit" onClick={()=>navigate('/')}>Registration</Button>
        </Toolbar>
      </AppBar>

    <Container>
      <Grid container spacing={3}>
        <div style={{margin:'16px'}}/>
        <Grid item xs={12}>        
          {children}
        </Grid>
      </Grid>
    </Container>
  </>
  );
}

export default Layout;
