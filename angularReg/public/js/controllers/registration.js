myApp.controller('RegistrationController',['$scope', 'Authentication', 
	function($scope, Authentication){

/*
OLD Syntax
var ref= new Firebase(FIREBASE_URL);
var auth = $firebaseAuth(ref);*/

/*
Moved to Authentication.js/factory
var auth = $firebaseAuth(firebase.auth());*/

$scope.login = function (){
	Authentication.login($scope.user);
}; //login


$scope.register = function (){

/*$scope.message="Welcome " + $scope.user.firstname;*/

/* Moved to Authentication.js/factory
	auth.$createUserWithEmailAndPassword($scope.user.email,$scope.user.password)
	.then(function(regUser){
		$scope.message="Hi " + $scope.user.firstname + ", Thanks for reigstering.";
		}).catch(function(error){
		$scope.message = error.message;

	}); //createUser
*/


Authentication.register($scope.user);

}; //registerUser

}]); //Controller