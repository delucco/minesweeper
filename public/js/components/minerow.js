var Mine = require('./mine');

var Minerow = React.createClass({

  render: function(){
    var row = this.props.row;
    var rowNum = this.props.rowNum;
    var mines = row.map(function(mine, column){
      return (
        <Mine mine={mine} rowNum={rowNum} col={column} />
      )
    })
    return (
      <center className="minerow cf"> 
        {mines}
      </center>
    );
  },

});

module.exports = Minerow;