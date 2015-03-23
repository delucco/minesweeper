var AppDispatcher = require('../dispatchers/appDispatcher');

var completedActions = {

  // selectMine: function(row, col) {
  //   Utils.checkMines(row, col);
  // },

  revealBombs: function(field) {
    AppDispatcher.handleViewAction({
      actionType: 'BOMBS_UNCOVERED',
      data: field 
    });
  },

  // setSettings: function(size, difficulty) {
  //   AppDispatcher.handleViewAction({
  //     actionType: 'NEW_SETTINGS',
  //     size: size,
  //     level: difficulty
  //   });
  //   Utils.reset(size, difficulty);
  // },

  resetField: function(field) {
    AppDispatcher.handleViewAction({
      actionType: 'FIELD_RESET',
      data: field
    });
  }

}

module.exports = completedActions;