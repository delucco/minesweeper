var cx = require('react/lib/cx');
var Actions = require('../actions/actions')

var Mine = React.createClass({

  select: function() {
    // Actions.select(row, col);
  },

  render: function() {
    return (
      <div className="mine" onClick={this.select}> 
        BOMB
      </div>
    );
  },

});

module.exports = Mine;