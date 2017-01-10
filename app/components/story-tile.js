import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
    update(story, params) {
      this.sendAction('update', story, params);
    },
    delete(story) {
      if (confirm("Are you sure you want to delete this story?")) {
        this.sendAction('destroyStory', story);
      }
    }
  }
});
