import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
    // return this.store.findAll('subcat');
    // return this.store.findRecord('category',params.category_id);
  },

  actions: {


    update(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          category.set(key, params[key]);
        }
    });

      category.save();
      this.transitionTo('index');
    },

    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo('index');
    },

    saveSubcat(params) {
      var newSubcat = this.store.createRecord('subcat', params);
      var category = params.category;
      category.get('subcats').addObject(newSubcat);
      newSubcat.save().then(function() {
        return category.save();
      });
      this.transitionTo('index');
    },

    subcatUpdate(subcat, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          subcat.set(key, params[key]);
        }
      });
      subcat.save();
    }
  }
});
