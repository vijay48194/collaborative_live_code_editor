import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Profile from './Profile';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }
   handleonchange(e) {
    this.setState({
      id: e.target.value
    });
        console.log(this.state.id)

  }
  render(){
    var id=this.state.id;
    return(

    <div>
      <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#" className="brand-logo center">Collab_Editor</a>
          </div>
        </nav>
    <ul>
    <li><Link to="/Editor">New Doc</Link>  <br /></li><br />
        <li><font color="#039be5">Enter Document ID:
        <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleonchange(e) } />      

        <Link to={`/profile/${id}`}>View your code</Link></font> </li>
        </ul>

        <footer className="page-footer blue lighten-1 ">
          <div className="container ">
            <div className="row ">
              <div className="col l6 s12">
                <h5 className="white-text">Collab_Editor</h5>
                <p className="grey-text text-lighten-4 ">Collab_Editor is a online live code editor</p>
              </div>
            
            </div>
          </div>
          <div className="footer-copyright blue darken-3 ">
            <div className="container">
            Collab_Editor
            © 2018 Copyright 
            </div>
          </div>
        </footer>
            
    </div>
      )
  }
}

export default Home;
