import Ember from 'ember';

export default Ember.Component.extend({
  updateCategory: false,
  actions: {
    saveSubcat(params) {
      this.sendAction('saveSubcat', params);
    },

    update(category,params) {
      this.sendAction('update', category, params);
    },

    delete(category) {
      if (confirm('Are you sure you want to delete this category?')) {
        this.sendAction('destroyCategory', category);
      }
    },

    subcatUpdate(subcat, params) {
      this.sendAction('subcatUpdate', subcat, params);
    },
    destroySubcat(subcat) {
      subcat.destroyRecord();
      this.transitionTo('index');
    }
  }
});
