var Minerow = require('./minerow');

var Minefield = React.createClass({

  render: function(){
    var field = this.props.minefield;
    var rows = field.map(function(row, num){
      return (
        <Minerow row={row} rowNum={num} />
      )
    })
    return (
      <div>
        <center className="minefield"> 
          {rows}
        </center>
      </div>
    );
  },

});

module.exports = Minefield;