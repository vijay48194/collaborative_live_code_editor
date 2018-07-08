import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/terminal';
import fire from './Fire';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
var database = fire.database();
var id = Math.floor(Math.random()*100);

class Editor extends Component {
  constructor(props) {
        super(props);
        this.state={
            newValue: "hello"
                };
        
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
      database.ref("/message"+id).on("child_added", (snapshot)=>{
      this.setState({
          newValue: snapshot.val().body
  })
    }
  )
console.log(this.state.newValue)
    }

    onChange(value) {
    database.ref("/message"+id).set({
    body: value
  });
  
  }
  
  render() {
    return (
      <div>
          Your Document ID:<p  dangerouslySetInnerHTML={{__html: id}}></p>
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
    );
  }
}

export default Editor;
