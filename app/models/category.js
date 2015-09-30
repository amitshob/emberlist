import DS from 'ember-data';

export default DS.Model.extend({
  catName: DS.attr(),
  subcats: DS.hasMany('subcat', {async: true})
});
