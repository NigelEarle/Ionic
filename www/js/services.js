angular.module('starter')

.factory('Chats', function() {

  var chats = [{
      id: 0,
      full_name: "Harrison Ford",
      logged_in: true,
      text: "Mayday",
      thumbnail:"http://www.theseanachai.com/wp-content/uploads/2005/06/thehansolotheory.png"
    }, {
      id: 1,
      full_name: "Liam Neeson",
      logged_in: false,
      text: "I will find you...and I will kill you.",
      thumbnail:"http://www.monologuedb.com/wp-content/uploads/2013/01/1.jpg"
    }, {
      id: 2,
      full_name: "Steven Seagal",
      logged_in: true,
      text: "Remember when I used to be a badass and fight everybody on top of a train...",
      thumbnail:"http://images2.fanpop.com/image/photos/14100000/Steve-steven-seagal-14163865-300-300.jpg"
    }, {
      id: 3,
      full_name: "Bruce Lee",
      logged_in: true,
      text: "Boards...don't hit back.",
      thumbnail:"http://s3-ec.buzzfed.com/static/2014-01/enhanced/webdr02/22/23/edit-21749-1390451296-9.jpg"
    }, {
      id: 4,
      full_name: "Bruce Willis",
      logged_in: false,
      text: "Yippee Ki-yay, MF!",
      thumbnail:"http://images.fandango.com/images/fandangoblog/willis%20die%20hard%204.jpg"
    }];

  return {
    all: function(){
      return chats;
    },
    remove: function(chat){
      chats.splice(chats.indexOf(chat), 1)
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId))
          return chats[i];
      }
      return null
    }
  };
})

.factory("Music", function (){
  var music = [{
    id:0,
    artist:"Micheal Bolton",
    avatar:"http://mit.zenfs.com/888/2013/02/Michael-Bolton-michael-bolton-25540784-1061-1041.jpg",
    songs:[
      "When A Man Loves A Woman",
      "Said I Loved You...But I Lied",
      "To Love Somebody",
      "Go the Distance"
    ]
  },{
    id:1,
    artist:"Carly Rae Jepson",
    avatar:"http://media.hamptonroads.com/cache/files/images/1063621.jpg",
    songs:[
      "Call Me Maybe",
    ]
  },{
    id:2,
    artist:"Juicy J",
    avatar:"http://upload.wikimedia.org/wikipedia/en/e/e8/Juicy_J_Stay_Trippy.jpg",
    songs:[
      "Money a Do It",
      "Talkin' Bout",
      "Scholarship",
      "All I Blow is Loud"
    ]
  },{
    id:3,
    artist:"Green Day",
    avatar:"http://www.unrecorded.mu/wp-content/uploads/2014/09/Green-Day-American-Idiot.jpg",
    songs:[
      "American Idiot",
      "Jesus Of Suburbia",
      "Holiday",
      "Give Me Novacaine",
      "Governator"
    ]
  }];

  return {
    all: function() {
      return music
    },
    get: function(musicId) {
    return music[musicId]
    }
  }
});