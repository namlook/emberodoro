
App.Router.map(function() {
    this.route('today-stats', {path: '/'});
    this.route('week-stats', {path: '/week'});
    this.route('settings', {path: '/settings'});
});

App.ApplicationRoute = Ember.Route.extend({

    model: function() {
        return App.timer;
    }
});

App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('today-stats');
    },
});

App.TodayStatsRoute = Ember.Route.extend({
    model: function() {
        var userKey = App.settings.get('parseKey');
        return this.store.filter('pomodoro', { userKey: userKey}, function(pomodoro) {
              return pomodoro.get('userKey') === userKey;
        });
    }
});

App.WeekStatsRoute = Ember.Route.extend({
    model: function() {
        var userKey = App.settings.get('parseKey');
        return this.store.filter('pomodoro', { userKey: userKey}, function(pomodoro) {
              return pomodoro.get('userKey') === userKey;
        });
    }
});

App.SettingsRoute = Ember.Route.extend({
    model: function() {
        return App.settings;
    }
});