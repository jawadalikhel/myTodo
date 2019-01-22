import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './register.css';

class Register extends Component{
  constructor(){
    super();
    this.state ={
      fullname: '',
      username: '',
      password: '',
    }
  }
  render(){
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <a href="/"><button>Home</button></a>
          </Toolbar>
        </AppBar>

        <div class="container">
          <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-column" class="col-md-6">
              <div class="box">
                  <div class="shape1"></div>
                  <div class="shape2"></div>
                  <div class="shape3"></div>
                  <div class="shape4"></div>
                  <div class="shape5"></div>
                  <div class="shape6"></div>
                  <div class="shape7"></div>

                  <div class="float">
                    <form class="form" action="">
                      <div class="form-group" className="input-div">
                        <input type="text" id="input"  name="fullname" id="fullname" class="form-control" placeholder="fullname"/><br/>
                        <input type="text" id="input"  name="username" id="username" class="form-control" placeholder="username"/><br/>
                        <input type="password" id="input" name="password" id="password" class="form-control" placeholder="password"/><br/>
                        <input type="submit" name="submit" class="btn btn-info btn-md" value="Register" />
                      </div>
                    </form>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
