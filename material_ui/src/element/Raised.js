import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React,{Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';;

injectTapEventPlugin();

class Raised extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Raised_Button"/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Raised;
