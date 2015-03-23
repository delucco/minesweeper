var cx = require('react/lib/cx');
var Actions = require('../actions/actions')

var Mine = React.createClass({

  select: function() {
    Actions.select(this.props.rowNum, this.props.col);
  },

  render: function() {

    return (
      <div className="mine" onClick={this.select}> 
        {this.props.mine.threat}
      </div>
    );
  },

});

module.exports = Mine;