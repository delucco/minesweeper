var cx = require('react/lib/cx');
var Actions = require('../actions/actions');

var SizeButton = React.createClass({

  reset: function() {
    Actions.setSettings(this.props.choice);
  },

  render: function() {
    var selected = this.props.size === this.props.choice
    return (
      <div className={cx({"selected": selected, "button": true})} onClick={this.reset}> 
        {this.props.choice}
      </div>
    );
  }

});

module.exports = SizeButton;