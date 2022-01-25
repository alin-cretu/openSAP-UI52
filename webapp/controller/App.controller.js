sap.ui.define(
  ["sap/ui/core/mvc/Controller", ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("opensap.movies.controller.App", {
      onInit: function () {},

      onPress: function (oEvent) {
      sap.ui.require(["sap/m/MessageToast"], function (oMessage, mOptions){
          oMessage.show('Searching...')
      })
      },
    });
  }
);
