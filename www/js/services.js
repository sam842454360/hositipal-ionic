angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '住院患者高风险报表',
    lastText: 'xxxxxxxxxxxxxx',
    face: '../img/hospital.jpg'
  }, {
    id: 1,
    name: '不良事件报表',
    lastText: 'xxxxxxxxxxxxxx',
    face: '../img/hospital_d.jpg'
  }, {
    id: 2,
    name: '营养风险筛查与营养护理单',
    lastText: 'xxxxxxxxxxxxxx',
    face: '../img/hospital_c.jpg'
  }, {
    id: 3,
    name: 'Braden压疮危险评估表',
    lastText: 'xxxxxxxxxxxxxx',
    face: '../img/hospital_b.jpg'
  }, {
    id: 4,
    name: 'MORSE跌倒评估表',
    lastText: 'xxxxxxxxxxxxxx',
    face: '../img/hospital_e.jpg'
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
