
/*
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5hfzJF6_wmF_sYsktJsdUQ613TZZpRVc",
    authDomain: "angregistration-36189.firebaseapp.com",
    databaseURL: "https://angregistration-36189.firebaseio.com",
    storageBucket: "angregistration-36189.appspot.com",
    messagingSenderId: "579705801662"
  };

  firebase.initializeApp(config);
*/

myApp.controller('RegistrationController',['$scope', 'Authentication', function($scope, Authentication){


$scope.login = function (){
	Authentication.login($scope.user);
}; //login


$scope.register = function (){

	Authentication.register($scope.user);
	
}; //registerUser

}]); //Controller