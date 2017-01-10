import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story')
  },
  actions: {
    saveStory3(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('index');
    },
    update(story, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          story.set(key,params[key]);
        }
      });
      story.save();
      this.transitionTo('index');
    },
    destroyStory(story) {
      story.destroyRecord();
      this.transitionTo('index');
    }
  }
});
