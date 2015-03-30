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
        <div className="minefield"> 
          {rows}
        </div>
      </div>
    );
  },

});

module.exports = Minefield;