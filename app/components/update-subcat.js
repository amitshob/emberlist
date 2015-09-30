import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  subcatFormShowing: false,
  actions: {
    showSubcatForm() {
      this.set('subcatFormShowing', true);
    },

    subcatUpdate(subcat) {

      var params = {
        subcatName: this.get('subcatName')
      };
      this.set('showSubcatForm', false);
      this.sendAction('subcatUpdate', subcat, params);
    }
  }
});
