import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
    subcatUpdate(subcat,params) {
      this.sendAction('subcatUpdate', subcat, params);
    },

    delete(subcat) {
      if (confirm('Are you sure you want to delete this Sub Category?')) {
        this.sendAction('destroySubcat', subcat);
      }
    }
  }
});
