import Ember from 'ember';

export default Ember.Component.extend({

  addNewSubcat: false,
  actions: {
    subcatFormShow() {
      this.set('addNewSubcat', true);
    },

    saveSubcat(category) {
      var params = {
        subcatName: this.get('subcatName'),
        category: this.get('category')
      };
      this.set('addNewSubcat', false);
      this.sendAction('saveSubcat', params);
    }
  }
});
