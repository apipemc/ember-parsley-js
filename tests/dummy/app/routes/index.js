import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    onSave() {
      console.log("Action submit");
    }
  }

});
