var AppDispatcher = require('../dispatchers/appDispatcher');
var Utils = require('./utils');

var Actions = {

  selectMine: function(row, col) {
    Utils.checkMines(row, col);
  },

  setSettings: function(size, difficulty) {
    AppDispatcher.handleViewAction({
      actionType: 'NEW_SETTINGS',
      size: size,
      level: difficulty
    });
    Utils.reset(size, difficulty);
  }

}

module.exports = Actions;