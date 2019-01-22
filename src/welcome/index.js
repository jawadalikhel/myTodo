import React, {Component} from 'react';
import './style.css';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class Welcome extends Component{
  render(){
    // const { classes } = props;

    return(
      <div >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit"></Typography>
            <a href="/login" className="login-link"><Button  color="inherit">Login</Button></a>
            <a href="/register" className="login-link"><Button  color="inherit">Register</Button></a>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default Welcome;
