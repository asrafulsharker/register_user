import React from 'react';
import {Link} from "react-router-dom";


class LandingPage extends React.Component{

  constructor(props){
    super(props);
    this.getQueryVariable = this.getQueryVariable.bind(this);
  }
getQueryVariable(variable){
         var query = window.location.search.substring(1);
         var vars = query.split("&");
         for (var i=0;i<vars.length;i++) {
                 var pair = vars[i].split("=");
                 if(pair[0] === variable){return pair[1];}
         }
         return(false);
  }

render(){
  return(
    <div className="ui container">
      <h1>Landing Page</h1>

    <p>Welcome Home {this.getQueryVariable("name")}</p>

        <Link to="/" className="button">Logout</Link>

    </div>

  );

}

}




export default LandingPage;
