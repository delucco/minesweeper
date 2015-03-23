var Settings = React.createClass({

  render: function(){
    return (
      <div className="settings cf"> 
        SETTINGS
      </div>
    );
  },

  _onChange: function() {
    this.setState(AppStore.getSelection());
  }

});

module.exports = Settings;