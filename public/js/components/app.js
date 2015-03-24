var Settings = require('./settings');
var Minefield = require('./minefield');
var AppStore = require('../stores/appStore');
var Actions = require('../actions/actions');
var cx = require('react/lib/cx');


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
      <div className="app clearfix" className={cx({"game": this.state.gameOver})}> 
        <center><h1>MINESWEEPER</h1></center>
        <center className={cx({"hidden": !this.state.gameOver, "game": this.state.gameOver})}>
          <h2>GAME OVER</h2>
        </center>
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