angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '黄晓明',
    lastText: '科室:1  ',
    doctor:'主诊医生:华佗',
    bedNum:'床号:203',
    face: '../img/patient.jpg'
  },{
    id: 1,
    name: '刘亦菲',
    lastText: '科室:3  ',
    doctor:'主诊医生:扁鹊',
    bedNum:'床号:245',
    face: '../img/patient1.jpg'
  },{
    id: 2,
    name: '区冠荣',
    lastText: '科室:4  ',
    doctor:'主诊医生:蔡桓公',
    bedNum:'床号:233',
    face: '../img/patient2.jpg'
  },{
    id: 3,
    name: '孙俪',
    lastText: '科室:1  ',
    doctor:'主诊医生:李克勤',
    bedNum:'床号:503',
    face: '../img/patient3.jpg'
  },{
    id: 4,
    name: '男子汉',
    lastText: '科室:6  ',
    doctor:'主诊医生:雷哥',
    bedNum:'床号:324',
    face: '../img/patient4.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
