var Mine = require('./mine');

var Minerow = React.createClass({

  render: function(){
    var row = this.props.row
    var mines = row.map(function(mine){
      return (
        <Mine mine={mine} />
      )
    })
    return (
      <div className="minerow cf"> 
        {mines}
      </div>
    );
  },

});

module.exports = Minerow;