var cx = require('react/lib/cx');
var Actions = require('../actions/actions');

var LevelButton = React.createClass({

  reset: function() {
    Actions.setSettings(null, this.props.choice);
  },

  render: function() {
    var selected = this.props.level === this.props.choice;
    return (
      <div className={cx({"selected": selected, "button": true})} onClick={this.reset}> 
        {this.props.choice}
      </div>
    );
  }

});

module.exports = LevelButton;