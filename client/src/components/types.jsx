import React from 'react';
import Paper from 'material-ui/Paper';
import Check from './checkbox.jsx';
import RaisedButton from 'material-ui/RaisedButton';

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
};

const Types = (props) => {
  const types = ['American', 'Asian', 'Chinese', 'Dessert', 'Greek', 'Hamburgers', 'Healthy', 'Indian',
                 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Pasta', 'Pizza',
                 'Salads', 'Sandwiches', 'Seafood', 'Soup', 'Sushi', 'Thai', 'Vegetarian', 'Wings', 'Wraps'];

  return (
    <div>
      <Paper style={style.paper} zDepth={3}>
        <h1>Chewser #{props.counter}</h1>
        <h2>What are you in the mood for?</h2>
        <div style={style.container}>
          {types.map(function(type) {
             return <Check name={"wantToEat"}
                           type={type}
                           choose={props.wantToEat} />
           })}
        </div>
        <h2>Any dealbreakers?</h2>
        <div style={style.container}>
          {types.map(function(type) {
             return <Check name={"willNotEat"}
                           type={type}
                           choose={props.willNotEat} />
           })}
        </div>
        <RaisedButton label="Next"
                      primary={true}
                      onClick={() => props.clickHandle("waiting") } />
      </Paper>
    </div>
  );
}

export default Types;
