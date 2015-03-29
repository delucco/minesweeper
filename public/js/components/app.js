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

  render: function() {
    return (
      <div className={cx({"lose": this.state.gameOver, "win": !this.state.meadowsRemaining})}> 
        <center><h1>MINESWEEPER</h1></center>
        {this.renderGameStatus()}
        <Settings settings={this.state.settings} />
        <Minefield minefield={this.state.minefield} />
      </div>
    );
  },

  renderGameStatus: function() {
    if (this.state.meadowsRemaining === 0) {
      return (
        <center className={cx({"win": !this.state.meadowsRemaining})}>
          <h2>YOU WIN</h2>
        </center>
      )
    } else if (this.state.gameOver) {
      return (
        <center className={cx({"lose": this.state.gameOver})}>
          <h2>GAME OVER</h2>
        </center>
      )
    } else {
      return (
        <center>
          <h3>Remaining Safe Zones: {this.state.meadowsRemaining}</h3>
        </center>
      )
    }
  },

  _onChange: function() {
    this.setState(AppStore.getState());
  }

});

module.exports = App;