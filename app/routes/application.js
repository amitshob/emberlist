import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      save3(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },
  }
});
