var Settings = require('./settings');
var Minefield = require('./minefield');
var AppStore = require('../stores/AppStore');

var App = React.createClass({

  getInitialState: function() {
    return AppStore.getState();
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