import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

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
          <div className="nav-wrapper blue darken-1">
            <a href="#" className="brand-logo center">Collab_Editor</a>
          </div>
        </nav>
		<ul>
		<li><Link to="/Editor">New Doc</Link>  <br /></li><br />
        <li><font color="blue">Enter Document ID:
        <input type="text" id="id" value={this.state.id} onChange={ (e) => this.handleonchange(e) } />			

        <Link to={`/profile/${id}`}>View your code</Link></font> </li>
        </ul>
		</div>
			)
	}
}

export default Home;
