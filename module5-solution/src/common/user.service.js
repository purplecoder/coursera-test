(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$q'];
function UserService($q) {
  var service = this;
  var cookie_name = "coursera-test5";

  function createCookie(name,value,days) {
  	if (days) {
  		var date = new Date();
  		date.setTime(date.getTime()+(days*24*60*60*1000));
  		var expires = "; expires="+date.toGMTString();
  	}
  	else var expires = "";
  	document.cookie = name+"="+JSON.stringify(value)+expires+"; path=/";
  }

  function readCookie(name) {
  	var nameEQ = name + "=";
  	var ca = document.cookie.split(';');
  	for(var i=0;i < ca.length;i++) {
  		var c = ca[i];
  		while (c.charAt(0)==' ') c = c.substring(1,c.length);
  		if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length,c.length));
  	}
  	return null;
  }

  function deleteCookie(name){
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  service.saveUser = function (user) {
    var deferred = $q.defer();
    createCookie(cookie_name, user,1);
    deferred.resolve(user);
    return deferred.promise;
  };
  service.getUser = function (user) {
    var deferred = $q.defer();
    var c = readCookie(cookie_name);
    deferred.resolve(c);
    return deferred.promise;
  };
  service.reset = function () {
    var deferred = $q.defer();
    deleteCookie(cookie_name);
    deferred.resolve("ok");
    return deferred.promise;
  };
}
})();
