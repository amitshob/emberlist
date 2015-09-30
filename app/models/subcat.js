import DS from 'ember-data';

export default DS.Model.extend({
  subcatName: DS.attr(),
  category: DS.belongsTo('category', {async :true})
});
