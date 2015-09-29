import Ember from 'ember';

export default Ember.Component.extend({
  update(category,params) {
      this.sendAction('update', category, params);
    }
});
