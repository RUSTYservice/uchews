import React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checks: {
    padding: '10px',
    width: '175px',
  },
};

class Types extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      types: ['American', 'Asian', 'Chinese', 'Dessert', 'Greek', 'Hamburgers', 'Healthy', 'Indian',
              'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Pasta', 'Pizza',
              'Salads', 'Sandwiches', 'Seafood', 'Soup', 'Sushi', 'Thai', 'Vegetarian', 'Wings', 'Wraps'],
    };
  }
  // TODO:
  // enable changeHandle on checkboxes buttons
  // enable get request on button click
    // do props.clickHandle("waiting") in get request function
  resetChecks() {
    this.props.clickHandle("waiting");
  }

  render() {
    return (
      <div>
      <Paper style={style.paper} zDepth={3}>
        <h1>Chewser #{this.props.counter}</h1>
        <h2>What are you in the mood for?</h2>
        <div style={style.container}>
          {this.state.types.map(function(type) {
            return <Checkbox name="wantToEat" style={style.checks} label={type} />
          })}
        </div>
        <h2>Any dealbreakers?</h2>
        <div style={style.container}>
          {this.state.types.map(function(type) {
            return <Checkbox name="willNotEat" style={style.checks} label={type} />
          })}
        </div>
        <RaisedButton label="Next" primary={true} onClick={() => { this.props.clickHandle("waiting") }} />
      </Paper>
      </div>
    )
  }

}

export default Types;