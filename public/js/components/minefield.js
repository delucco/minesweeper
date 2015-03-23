var Minerow = require('./minerow');

var Minefield = React.createClass({

  render: function(){
    var field = this.props.minefield;
    var rows = field.map(function(row){
      return (
        <center><Minerow row={row} /></center>
      )
    })
    return (
      <div className="minefield"> 
        {rows}
      </div>
    );
  },

});

module.exports = Minefield;