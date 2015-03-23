var Settings = require('./settings');
var Minefield = require('./minefield');
var AppStore = require('../stores/appStore');
var Actions = require('../actions/actions');

var App = React.createClass({

  getInitialState: function() {
    return AppStore.getState();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
    Actions.setSettings('medium', 'medium');
  },

  render: function(){
    return (
      <div className="app clearfix"> 
        <center>MINESWEEPER</center>
        <Settings settings={this.state.settings} />
        <Minefield minefield={this.state.minefield} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(AppStore.getState());
  }

});

module.exports = App;