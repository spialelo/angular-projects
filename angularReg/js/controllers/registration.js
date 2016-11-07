// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5hfzJF6_wmF_sYsktJsdUQ613TZZpRVc",
    authDomain: "angregistration-36189.firebaseapp.com",
    databaseURL: "https://angregistration-36189.firebaseio.com",
    storageBucket: "angregistration-36189.appspot.com",
    messagingSenderId: "579705801662"
  };

  firebase.initializeApp(config);


myApp.controller('RegistrationController',['$scope', '$firebaseAuth', function($scope, $firebaseAuth){

//var ref= new Firebase(FIREBASE_URL);

var ref = firebase.database().ref();
//var auth = $firebaseAuth(ref);
auth = $firebaseAuth(firebase.auth());

$scope.login = function (){
	$scope.message="Welcome " + $scope.user.email;
}; //login


$scope.register = function (){

/*$scope.message="Welcome " + $scope.user.firstname;*/

	auth.$createUserWithEmailAndPassword($scope.user.email,$scope.user.password)
	.then(function(regUser){
		$scope.message="Hi " + $scope.user.firstname + ", Thanks for reigstering.";
		}).catch(function(error){
		$scope.message = error.message;

	}); //createUser
	
}; //registerUser

}]); //Controller