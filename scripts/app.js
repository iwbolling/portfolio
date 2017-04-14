// IMPORTS - JQUERY


// IMPORTS - BACKBONE
import Backbone from "../lib/backbone-min.js";

// IMPORTS - COMPONENTS

// IMPORTS - VIEWS
import {AboutMeView} from "./views/view-about.js";

// BACKBONE FUNCTIONS
const AppRouter = Backbone.Router.extend({
  initialize: function(){
    console.log("Routing active.".toUpperCase());
    Backbone.history.start();
  },

  routes: {
    "" : "showAbout"
  },

  showAbout: function(){
    console.log("Current View: about page");
    let viewInstance = new AboutMeView();
    viewInstance.render();
  }
})
