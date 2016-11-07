
myApp.factory('Authentication', ['$rootScope','$firebaseAuth', function($rootScope, $firebaseAuth){

var auth = $firebaseAuth(firebase.auth());

return {
	login: function (user) {
		$rootScope.message="Welcome " + $scope.user.email;
	}, //login

	register: function (user){
/*Create user using their email address and password*/
	auth.$createUserWithEmailAndPassword(user.email,user.password)
	.then(function(regUser){
		$rootScope.message="Hi " + user.firstname + ", Thanks for registering.";
		}).catch(function(error){
			/*If error occurs, shows message in app*/
		$rootScope.message = error.message;

	}); //createUser
	
	}//register
};


}]); //factory


