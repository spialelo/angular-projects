
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5hfzJF6_wmF_sYsktJsdUQ613TZZpRVc",
    authDomain: "angregistration-36189.firebaseapp.com",
    databaseURL: "https://angregistration-36189.firebaseio.com",
    storageBucket: "angregistration-36189.appspot.com",
    messagingSenderId: "579705801662"
  };

  firebase.initializeApp(config);


myApp.factory('Authentication',['$rootScope', '$firebaseAuth', function($rootScope, $firebaseAuth){

//var ref= new Firebase(FIREBASE_URL);

var ref = firebase.database().ref();
//var auth = $firebaseAuth(ref);
auth = $firebaseAuth(firebase.auth());


return {
	login: function (user) {
		$rootScope.message="Welcome " + $scope.user.email;
	}, //login
	register: function (user){
		auth.$createUserWithEmailAndPassword(user.email,user.password)
	.then(function(regUser){
		$rootScope.message="Hi " + user.firstname + ", Thanks for registering.";
		}).catch(function(error){
		$rootScope.message = error.message;

	}); //createUser
	
	} //registerUser

}

}]); //factory

