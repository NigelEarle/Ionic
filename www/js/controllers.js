angular.module('starter')

.controller('HomeCtrl', function($scope){})

.controller("ChatCtrl", function($scope, Chats){
  $scope.chats = Chats.all();
  $scope.remove = function(chat){
    Chats.remove(chat)
  }
})

.controller("SingleChatCtrl", function($scope, $stateParams, Chats){
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller("AccountCtrl", function($scope){
})

.controller("MusicCtrl", function($scope, Music){
  $scope.music = Music.all();
})

.controller("MusicSongsCtrl", function($scope, $stateParams, Music){
  $scope.song = Music.get($stateParams.musicId);
})

.controller("SingleSongCtrl", function($scope, $stateParams, Music){
  $scope.song = Music.get($stateParams.musicId);
  $scope.song_name = $stateParams.songName;
})