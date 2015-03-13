// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  // setup an abstract state for the tabs directive

  $stateProvider


    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
  })

  .state("tab.home",{
    url:"/home",
    views: {
      'tab-home': {
        templateUrl: "templates/tab-home.html",
        controller: "HomeCtrl"
      }
    }
  })

  .state("tab.chats", {
    url:"/chats",
    views: {
      "tab-chats": {
        templateUrl: "templates/tab-chats.html",
        controller: "ChatCtrl"
      }
    }
  })
  .state("tab.single-chat", {
    url: "/chats/:chatId",
    views: {
      "tab-chats": {
        templateUrl: "templates/chat-singlechat.html",
        controller: "SingleChatCtrl"
      }
    }
  })
  .state("tab.account", {
    url:"/account",
    views: {
      "tab-account": {
        templateUrl: "templates/tab-account.html",
        controller: "AccountCtrl"
      }
    }
  })
  .state("tab.music", {
    url:"/music",
    views: {
      "tab-music": {
        templateUrl: "templates/tab-music.html",
        controller:"MusicCtrl"

      }
    }
  })
  .state("tab.music-songs", {
    url: "/music/:musicId",
    views: {
      "tab-music": {
        templateUrl: "templates/music-songs.html",
        controller: "MusicSongsCtrl"
      }
    }
  })
  .state("tab.music-songs-song", {
    url: "/music/:musicId/:songName",
    views:{
      "tab-music": {
        templateUrl: "templates/single-song.html",
        controller: "SingleSongCtrl"
      }
    }
  })

  $urlRouterProvider.otherwise("/tab/home");

});