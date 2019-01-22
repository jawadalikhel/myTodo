import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './style.css';

class Login extends Component{
  constructor(){
    super();
    this.state ={
      username: '',
      password: '',
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const findUser = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await findUser.json();
      console.log(parsedResponse, ' this is parsed data at login');

      if(parsedResponse.data === 'login successful'){
        this.props.history.push('/');
      }else if(parsedResponse.data === 'login unsuccessful'){
        alert('Password Incorrect')
      } else if (parsedResponse.data === 'login unsuccessful'){
        alert('username Not Fount. please Register')
      }
    } catch (err) {
      console.log(err, 'error in handleSubmit')
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
                    <form class="form" action="" onSubmit={this.handleSubmit}>
                      <div class="form-group">
                        <input type="text" onChange={this.handleChange} name="username" id="username" class="form-control" placeholder="username"/>
                      </div>
                      <div class="form-group">
                        <input type="password" onChange={this.handleChange} name="password" id="password" class="form-control" placeholder="password"/>
                      </div>
                      <div class="form-group">
                        <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
                      </div>
                    </form>

                  </div>

              </div>
            </div>
          </div>
        </div>
        <a href = "/register">Register</a>
      </div>
    )
  }
}

export default Login;
