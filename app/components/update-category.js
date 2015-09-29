import Ember from 'ember';

export default Ember.Component.extend({

  updateCategoryForm: false,
  actions: {
    updateCategoryForm() {
      this.set('updateCategoryForm', true);
    },
    update(category) {
      var params = {
        catName: this.get('catName')
      };
      this.set('updateCategoryForm', false);
      this.sendAction('update', category, params);
    }
  }
});
