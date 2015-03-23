var AppDispatcher = require('../dispatchers/appDispatcher');
// var Utils = require('../utils/utils');
// var Constants = require('../constants/constants')

var Actions = {

  selectMine: function(row, col) {
    AppDispatcher.handleViewAction({
      actionType: Constants.SELECTED_LIBRARY,
      text: libraryName
    });
  }

}

module.exports = Actions