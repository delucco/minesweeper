var cx = require('react/lib/cx');
var Actions = require('../actions/actions')

var Mine = React.createClass({

  select: function() {
    Actions.selectMine(this.props.rowNum, this.props.col);
  },

  render: function() {
    var icon = this.props.mine.bombs===1 ? 'B' : this.props.mine.threat;
    return (
      <div className={cx({"uncovered": this.props.mine.revealed, "mine": true})} onClick={this.select}> 
        {icon}
      </div>
    );
  },

});

module.exports = Mine;