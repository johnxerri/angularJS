// Ajout d un controller : HomeCtrl
myApp.controller('HomeCtrl', function($scope){

	/* Ajouter des variables dans le $scope */
	$scope.titleH1 = 'My angular Title';

	$scope.myText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	$scope.textBtn = 'Traduire le texte';

	/* Ajouter une fonction dans le $scope */
	$scope.changeLang = function(){
		console.log('click');

		$scope.titleH1 = 'Mon super titre Angular';
		$scope.myText = 'Nouveau texte';
		$scope.textBtn = 'Translate it';

	};

});