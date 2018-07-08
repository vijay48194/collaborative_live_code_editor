import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/terminal';
import Editor from './Editor';
import fire from './Fire';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
var database = fire.database();

class Profile extends Component {

	constructor(props) {
    super(props);
    var id=this.props.match.params.id;
    console.log(id)
     this.state = {
      id: id,
      newValue:"hello"
    };
  }
  componentDidMount(){
         database.ref("/message"+this.state.id).on("value",(snapshot)=>{
         this.setState({
    newValue: snapshot.val().body
        })
      }
      )}
  onChange(value) {
   
    database.ref("/message"+this.state.id).set({
    body: value
  });
  
  }

	render(){
		return(
		<div>
        <AceEditor
                    mode="javascript"
                    theme="terminal"
                    onChange={(value)=>{this.onChange(value)}}
                    name="root"
                    editorProps={{
                        $blockScrolling: true
                    }}            
                    value={this.state.newValue}

                        />

        </div>
			)
	}
}

export default Profile;
